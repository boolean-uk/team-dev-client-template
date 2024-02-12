import Post from "../post";

const Posts = ({ posts, getAllPosts }) => {

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
          getAllPosts={getAllPosts} 
        />
      ))}
    </>
  );
};

export default Posts;
