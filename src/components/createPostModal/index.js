import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { post } from '../../service/apiClient';
import useModal from '../../hooks/useModal';
import './style.css';
import Button from '../button';

const CreatePostModal = () => {
  // Use the useModal hook to get the closeModal function so we can close the modal on user interaction
  const { closeModal } = useModal();
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);
  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await post('posts', { content: text });

      if (response.status === 'fail') {
        throw new Error(response.message || 'Failed to create post');
      }

      setMessage('Post created successfully!');
      setTimeout(() => {
        setMessage(null);
        closeModal();
        navigate(0); // Refresh current page after success
      }, 2000);
    } catch (error) {
      setMessage('Error creating post: ' + error.message);
    } finally {
      setIsLoading(false);
    }
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

      <section>
        <textarea onChange={onChange} value={text} placeholder="What's on your mind?"></textarea>
      </section>

      <section className="create-post-actions">
        <Button
          onClick={onSubmit}
          text={isLoading ? 'Posting...' : 'Post'}
          classes={`${text.length ? 'blue' : 'offwhite'} width-full`}
          disabled={!text.length}
        />
      </section>

      {message && <p>{message}</p>}
    </>
  );
};

export default CreatePostModal;
