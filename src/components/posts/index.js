import { useEffect, useState } from "react";
import Post from "../post";
import { getPosts } from "../../service/apiClient";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const fetchAndSetPosts = () => { 
    getPosts()
      .then((fetchedPosts) => {
        const sortedPosts = fetchedPosts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
        setPosts(sortedPosts);
      })
      .catch((error) => {
        console.error("Fetch error:", error.message);
      });
  };

  useEffect(() => {
    fetchAndSetPosts(); 
  }, []);

  return (
    <>
      {posts.map((post) => (
        <Post
          key={post.id}
          postId={post.id}
          name={`${post.author.firstName} ${post.author.lastName}`}
          date={post.createdAt}
          content={post.content}
          comments={post.comments}
          refreshPosts={fetchAndSetPosts} 
        />
      ))}
    </>
  );
};

export default Posts;
