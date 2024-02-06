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

  const onSubmit = () => {
    setMessage("Post updated! Closing modal in 2 seconds...");
    setTimeout(() => {
      setMessage(null);
      closeModal();
    }, 2000);
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
    setMessage("Post deleted! Closing modal in 2 seconds...");
    setTimeout(() => {
      setMessage(null);
      closeModal();
    }, 2000);
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
          <button onClick={handleConfirmDelete}>Confirm</button>
          <button onClick={handleCancelDelete}>Cancel</button>
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
