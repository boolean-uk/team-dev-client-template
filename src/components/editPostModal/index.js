import { useState } from "react"
import useModal from "../../hooks/useModal"
import "./style.css"
import { deletePost, editPost } from "../../service/apiClient.js"
import { useTranslation } from "react-i18next"
import { Trans } from "react-i18next"

const EditPostModal = ({ postId, getAllPosts, setPostContent }) => {
  const {t} = useTranslation()
  const { closeModal } = useModal()
  const [message, setMessage] = useState(null)
  const [text, setText] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const onChange = (e) => {
    setText(e.target.value)
  }

  const handleActionWithMessage = (message, timeout = 2000) => {
    setMessage(message)
    setTimeout(() => {
      setMessage(null)
      closeModal()
    }, timeout)
  }

  const handleEditClick = () => {
    setIsEditing(true)
    setIsDeleting(false)
  }

  const handleDeleteClick = () => {
    setIsDeleting(true)
    setIsEditing(false)
  }

  const handleConfirmDelete = async (postId) => {
    try {
      await deletePost(postId)
      handleActionWithMessage(t("PostDeleted"))
      getAllPosts()
    } catch (error) {
      console.error("Failed to delete the post:", error.message)
      setMessage(t("FailedToDeleteThePost"))
    }
  }

  const handleConfirmEdit = async () => {
    if (!text.trim()) {
      setMessage(t("CannotUpdateWithEmpty"))
      return
    }

    try {
      const editPostResponse = await editPost(postId, { content: text })
      const editedPost = editPostResponse.data.post.content
      handleActionWithMessage(t("PostEdited"))
      setPostContent(editedPost)
    } catch (error) {
      console.error("Failed to edit the post:", error.message)
      setMessage(t("FailedToEditPost"))
    }
  }

  const handleCancelDelete = () => {
    setIsDeleting(false)
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

      <section className="edit-delete-buttons">
        <div className="button-container">
          <button
            className={`post__settings-button edit ${isEditing && "post__settings-button--active"}`}
            onClick={handleEditClick}
          >
            <Trans>Edit</Trans>
          </button>
        </div>
        <div className="button-container">
          <button
            className={`post__settings-button delete ${isDeleting && "post__settings-button--active"}`}
            onClick={handleDeleteClick}
          >
            <Trans>Delete</Trans>
          </button>
        </div>
      </section>

      {isEditing && (
        <section>
          <textarea
            onChange={onChange}
            value={text}
            placeholder="Edit your post"
          ></textarea>
          <button
            className="post__settings-button second-edit"
            onClick={handleConfirmEdit}
          >
            <Trans>Edit</Trans>
          </button>
        </section>
      )}

      {isDeleting && (
        <section className="delete-confirmation">
          <p>{t("AreYouSureDelete")}</p>
          <button
            className="post__settings-button cancel-delete"
            onClick={handleCancelDelete}
          >
            <Trans>Cancel</Trans>
          </button>
          <button
            className="post__settings-button second-delete"
            onClick={() => handleConfirmDelete(postId)}
          >
            {t("DeletePost")}
          </button>
        </section>
      )}

      {message && <p>{message}</p>}
    </>
  )
}

export default EditPostModal
