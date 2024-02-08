import Post from "../post";

const Posts = ({ posts }) => {
  
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
