import { useState } from "react"
import useModal from "../../hooks/useModal"
import "./style.css"
import Button from "../button"
import { postPost } from "../../service/apiClient"
import useAuth from "../../hooks/useAuth"

const CreatePostModal = ({ getAllPosts }) => {
  // Use the useModal hook to get the closeModal function so we can close the modal on user interaction
  const { closeModal } = useModal()

  const [message, setMessage] = useState(null)
  const [text, setText] = useState("")

  const onChange = (e) => {
    setText(e.target.value)
  }

  const onSubmit = () => {
    const { userId } = useAuth()
    const newPost = {
      content: text,
      userId,
    }

    const createPost = (newPost) => {
      postPost(newPost).then(getAllPosts)
    }

    try {
      createPost(newPost)
      setMessage(null)
      closeModal()
    } catch (e) {
      if (e.codeStatus === 400) {
        setMessage("Oops, this post is empty!")
      }
    }
  }

  return (
    <>
      <section className="create-post-user-details">
        <div className="profile-icon">
          <p>AJ</p>
        </div>
        <div className="post-user-name">
          <p>Alex J</p>
        </div>
      </section>
      <section>
        <textarea
          onChange={onChange}
          value={text}
          placeholder="What's on your mind?"
        ></textarea>
      </section>
      <section className="create-post-actions">
        <Button
          onClick={onSubmit}
          text="Post"
          classes={`${text.length ? "blue" : "offwhite"} width-full`}
          disabled={!text.length}
        />
      </section>

      {message && <p>{message}</p>}
    </>
  )
}

export default CreatePostModal
