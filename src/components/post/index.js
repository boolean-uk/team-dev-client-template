import { useState } from 'react';
import useModal from '../../hooks/useModal';
import Card from '../card';
// import Comment from '../comment';
import EditPostModal from '../editPostModal';
import ProfileCircle from '../profileCircle';
import './style.css';

const Post = ({ name, date, content, initialComments = [], initialLikes = 0 }) => {
  const { openModal, setModal } = useModal();
  const [comments, setComments] = useState(initialComments);
  const [comment, setComment] = useState('');
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);

  const userInitials = name.match(/\b(\w)/g);

  const showModal = () => {
    setModal('Edit post', <EditPostModal />);
    openModal();
  };

  const handleSubmit = (event) => {
    console.log('ooooo');
    const newCommentObj = {
      commentName: name,
      content: comment
    };
    console.log(newCommentObj);

    setComments([...comments, newCommentObj]);
    console.log(comments);
  };

  const toggleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <Card>
      <article className="post">
        <section className="post-details">
          <ProfileCircle initials={userInitials} />

          <div className="post-user-name">
            <p>{name}</p>
            <small>{date}</small>
          </div>

          <div className="edit-icon">
            <p onClick={showModal}>...</p>
          </div>
        </section>

        <section className="post-content">
          <p>{content}</p>
        </section>

        <section
          className={`post-interactions-container border-top ${comments.length ? 'border-bottom' : null}`}
        >
          <div className="post-interactions">
            <button id="like-button" className={isLiked ? 'liked' : ''} onClick={toggleLike}>
              {isLiked ? 'Liked' : 'Like'}
            </button>
          </div>

          <p>{!likes && 'Be the first to like this'}</p>
        </section>

        {/* <section>
          {comments.map((comment) => (
            <div className="user-name" key={comment.id}>
              <ProfileCircle initials={userInitials} />
              <div className="comment-section">
                <Comment key={comment.id} name={comment.commentName} content={comment.content} />
              </div>
            </div>
          ))}
        </section> */}
        <section>
          {comments.map((comment, index) => (
            <div className="comment-item" key={index}>
              <ProfileCircle initials={userInitials} />
              <div className="comment-box">
                <p className="comment-name">{comment.commentName}</p>
                <p className="comment-text">{comment.content}</p>
              </div>
            </div>
          ))}
        </section>
        <section className="comment-section">
          <div className="user-name">
            <ProfileCircle initials={userInitials} />
          </div>
          <div className="comment-input">
            <input
              type="text"
              placeholder="Write something nice..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button onClick={handleSubmit}>Comment</button>
          </div>
        </section>
      </article>
    </Card>
  );
};

export default Post;
