import { useState } from "react"
import ProfileCircle from "../profileCircle"
import "./style.css"
import sendIcon from "../../assets/icons/send.png"
import { postComment } from "../../service/apiClient"

const CommentInput = ({ postId, getAllPosts }) => {
  const [content, setContent] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    postComment({ postId, content }).then(getAllPosts)
    setContent("")
  }

  const changeHandler = (e) => {
    setContent(e.target.value)
  }

  return (
    <section className="commentInput">
      <ProfileCircle initials="AJ" />
      <form onSubmit={submitHandler} className="commentInput__content">
        <input
          type="text"
          placeholder="Add a comment..."
          className="commentInput__content-input"
          value={content}
          onChange={changeHandler}
          required
        />
        <button className="commentInput__content-button">
          <img src={sendIcon} alt="send message" />
        </button>
      </form>
    </section>
  )
}

export default CommentInput
