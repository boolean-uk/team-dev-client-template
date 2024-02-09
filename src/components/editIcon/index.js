import "./style.css";

const EditIcon = ({ showModel }) => {
  return (
    <>
      <div className="edit-icon">
        <p onClick={showModel}>...</p>
      </div>
    </>
  );
};

export default EditIcon;
