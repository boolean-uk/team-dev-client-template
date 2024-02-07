import { useEffect, useState } from "react";
import Post from "../post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem('token'); 

    const apiUrl = process.env.REACT_APP_API_URL;
    fetch(`${apiUrl}/posts`, {
        headers: {
            'Authorization': `Bearer ${token}` 
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        if (!data.data || !data.data.posts || !Array.isArray(data.data.posts)) {
            throw new Error("Invalid data format: Posts data is not an array.");
        }
        const sortedPosts = data.data.posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setPosts(sortedPosts);
    })
    .catch(error => {
        console.error("Fetch error:", error.message);
    });
}, []);


  return (
    <>
      {posts.map((post) => (
        <Post
          key={post.id}
          name={`${post.author.firstName} ${post.author.lastName}`}
          date={post.createdAt}
          content={post.content}
          comments={post.comments}
        />
      ))}
    </>
  );
};

export default Posts;

