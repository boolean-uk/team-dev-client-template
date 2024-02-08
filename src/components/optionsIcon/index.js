import "./style.css";

const OptionsIcon = ({ showModel, trigger }) => {
  return (
    <>
      <div onClick={trigger} className="edit-icon">
        <p onClick={showModel}>...</p>
      </div>
    </>
  );
};

export default OptionsIcon;
