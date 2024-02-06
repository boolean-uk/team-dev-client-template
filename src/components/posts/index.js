import { useEffect, useState } from "react";
import Post from "../post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token'); // Adjust according to where your token is stored

    fetch('http://localhost:4000/posts', {
        headers: {
            'Authorization': `Bearer ${token}` // Include the authorization header
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Correctly accessing the nested structure of the response
        if (data.data && data.data.posts && Array.isArray(data.data.posts)) {
            const sortedPosts = data.data.posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setPosts(sortedPosts);
        } else {
            console.error('Posts data is not an array', data);
        }
    })
    .catch(error => console.error("Fetch error:", error));
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
