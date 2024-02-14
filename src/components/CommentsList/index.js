import { useEffect, useState } from "react"
import Comment from "../comment"

const CommentsList = (postId) => {
  const [comments, setComments] = useState([])

  useEffect(() => {}, [])

  return (
    <section className={`comments ${comments.length > 0 && "border-top"}`}>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          name={comment.name}
          content={comment.content}
        />
      ))}
    </section>
  )
}

export default CommentsList
