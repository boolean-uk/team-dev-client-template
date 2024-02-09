import { useState } from 'react'
import useModal from '../../hooks/useModal'
import './style.css'
import { deletePost, editPost } from '../../service/apiClient.js'

const EditPostModal = ({ postId, getAllPosts, setPostContent }) => {
  const { closeModal } = useModal()
  const [message, setMessage] = useState(null)
  const [text, setText] = useState('')
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
      handleActionWithMessage('Post deleted! Closing modal in 2 seconds...')
      getAllPosts()
    } catch (error) {
      console.error('Failed to delete the post:', error.message)
      setMessage('Failed to delete the post. Please try again.')
    }
  }

  const handleConfirmEdit = async () => {
    if (!text.trim()) {
      setMessage('Cannot update with empty content.')
      return
    }

    try {
      const editPostResponse = await editPost(postId, { content: text })
      const editedPost = editPostResponse.data.post.content
      handleActionWithMessage('Post edited! Closing modal in 2 seconds...')
      setPostContent(editedPost)
    } catch (error) {
      console.error('Failed to edit the post:', error.message)
      setMessage('Failed to edit the post. Please try again.')
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
            className={`post__settings-button edit ${isEditing && 'post__settings-button--active'}`}
            onClick={handleEditClick}
          >
            Edit
          </button>
        </div>
        <div className="button-container">
          <button
            className={`post__settings-button delete ${isDeleting && 'post__settings-button--active'}`}
            onClick={handleDeleteClick}
          >
            Delete
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
            Edit
          </button>
        </section>
      )}

      {isDeleting && (
        <section className="delete-confirmation">
          <p>Are you sure you want to delete this post?</p>
          <button
            className="post__settings-button cancel-delete"
            onClick={handleCancelDelete}
          >
            Cancel
          </button>
          <button
            className="post__settings-button second-delete"
            onClick={() => handleConfirmDelete(postId)}
          >
            Delete Post
          </button>
        </section>
      )}

      {message && <p>{message}</p>}
    </>
  )
}

export default EditPostModal
