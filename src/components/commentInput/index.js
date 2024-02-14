import { useState } from "react"
import ProfileCircle from "../profileCircle"
import "./style.css"
import sendIcon from "../../assets/icons/send.png"
//import { postComment } from "../../service/apiClient"
import { useTranslation } from "react-i18next"

const CommentInput = ({ postId, getAllPosts }) => {
  const {t} = useTranslation()
  const [content, setContent] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
   // postComment({ postId, content }).then(getAllPosts)
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
          placeholder={t("addAComment")}
          className="commentInput__content-input"
          value={content}
          onChange={changeHandler}
          required
        />
        <button className="commentInput__content-button">
          <img src={sendIcon} alt={t("sendMessage")} />
        </button>
      </form>
    </section>
  )
}

export default CommentInput
