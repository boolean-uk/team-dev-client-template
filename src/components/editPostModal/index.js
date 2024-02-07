import { useState } from "react";
import useModal from "../../hooks/useModal";
import "./style.css";
import Button from "../button";

const EditPostModal = () => {
  const { closeModal } = useModal();
  const [message, setMessage] = useState("");
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const handleActionWithMessage = (message, timeout = 2000) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
      closeModal();
    }, timeout);
  };

  const onSubmit = () => {
    handleActionWithMessage("Post updated! Closing modal in 2 seconds...");
  };

  const handleEditClick = () => {
    setIsEditing(true);
    setIsDeleting(false);
  };

  const handleDeleteClick = () => {
    setIsDeleting(true);
    setIsEditing(false);
  };

  const handleConfirmDelete = () => {
    handleActionWithMessage("Post deleted! Closing modal in 2 seconds...");
  };

  const handleCancelDelete = () => {
    setIsDeleting(false);
  };

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
          <div className="circle-icon"></div>
          <button className="edit" onClick={handleEditClick}>Edit</button>
        </div>
        <div className="button-container">
          <div className="circle-icon"></div>
          <button className="delete" onClick={handleDeleteClick}>Delete</button>
        </div>
      </section>

      {isEditing && (
        <section>
          <textarea onChange={onChange} value={text} placeholder="Edit your post"></textarea>
        </section>
      )}

      {isDeleting && (
        <section className="delete-confirmation">
          <p>Are you sure you want to delete this post?</p>
          <button className="cancel-delete" onClick={handleCancelDelete}>Cancel</button>
          <button className="second-delete" onClick={handleConfirmDelete}>Delete Post</button>
        </section>
      )}

      <section className="create-post-actions">
        <Button
          onClick={onSubmit}
          text="Post"
          classes={`${text.length ? "blue" : "offwhite"} width-full`}
          disabled={!text.length || isDeleting}
        />
      </section>

      {message && <p>{message}</p>}
    </>
  );
};

export default EditPostModal;
