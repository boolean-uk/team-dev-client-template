import AddIcon from '../../assets/icons/addIcon';
import DeleteIcon from '../../assets/icons/deleteIcon';
import './style.css';

const EditDecisionModal = ({ onClick }) => {
  return (
    <section className="edit-decision-container" onClick={onClick}>
      <div className="decision-icon-container">
        <AddIcon />
        <p>Edit post</p>
      </div>
      <div className="decision-icon-container">
        <DeleteIcon />
        <p>Delete post</p>
      </div>
    </section>
  );
};

export default EditDecisionModal;
