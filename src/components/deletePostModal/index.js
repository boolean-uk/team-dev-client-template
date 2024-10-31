import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deletePost } from '../../service/apiClient';
import useModal from '../../hooks/useModal';
import Button from '../button';
import './style.css';

const DeletePostModal = ({ postId }) => {
  const { closeModal } = useModal();
  const navigate = useNavigate();
  const [activeBtn, setActiveBtn] = useState('Cancel');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  console.log(`Post ID: ${postId}`);

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      const response = await deletePost(`posts/${postId}`);

      if (response.status === 'fail') {
        throw new Error(response.message || 'Failed to delete post');
      }

      setMessage('Post deleted successfully!');
      setTimeout(() => {
        closeModal();
        navigate(0);
      }, 2000);
    } catch (error) {
      setMessage('Error deleting post: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="delete-post-container">
      <p className="delete-post-text">Are you sure you want to delete this post?</p>
      <div className="button-container">
        <Button
          text={'Cancel'}
          classes={`btn ${activeBtn === 'Cancel' ? 'active-btn' : ''}`}
          onClick={closeModal}
          disabled={isLoading}
        />
        <Button
          text={'Delete post'}
          classes={`btn ${activeBtn === 'Delete' ? 'active-btn' : ''}`}
          onClick={() => {
            setActiveBtn('Delete');
            handleDelete();
          }}
          disabled={isLoading}
        />
      </div>
      {message && <p>{message}</p>}
    </section>
  );
};

export default DeletePostModal;
