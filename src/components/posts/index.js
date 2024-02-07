import Post from '../post'

const Posts = ({ posts }) => {
  return (
    <>
      {posts &&
        posts.map((post) => {
          return (
            <Post
              key={post.id}
              name={`${post.author.firstName} ${post.author.lastName}`}
              date={post.createdAt}
              content={post.content}
              comments={post.comments}
            />
          )
        })}
    </>
  )
}

export default Posts
