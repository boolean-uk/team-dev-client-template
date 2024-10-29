import useModal from '../../hooks/useModal';
import Card from '../card';
import Comment from '../comment';
import DeletePostModal from '../deletePostModal';
import EditDecisionModal from '../editDecisionModal';
import EditPostModal from '../editPostModal';
import ProfileCircle from '../profileCircle';
import './style.css';

const Post = ({ name, date, content, comments = [], likes = 0 }) => {
  const { openModal, setModal } = useModal();
  const userInitials = name.match(/\b(\w)/g);
  const modalsMap = {
    'Edit post': <EditPostModal />,
    'Delete post': <DeletePostModal />
  };

  const handleDecisionClick = (decision) => {
    setModal(decision, modalsMap[decision]);
    openModal();
  };

  const pickModalDecision = () => {
    setModal('Edit decision', <EditDecisionModal onClick={handleDecisionClick} />);
    openModal();
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
            <p onClick={pickModalDecision}>...</p>
          </div>
        </section>

        <section className="post-content">
          <p>{content}</p>
        </section>

        <section
          className={`post-interactions-container border-top ${comments.length ? 'border-bottom' : null}`}
        >
          <div className="post-interactions">
            <div>Like</div>
            <div>Comment</div>
          </div>

          <p>{!likes && 'Be the first to like this'}</p>
        </section>

        <section>
          {comments.map((comment) => (
            <Comment key={comment.id} name={comment.name} content={comment.content} />
          ))}
        </section>
      </article>
    </Card>
  );
};

export default Post;
