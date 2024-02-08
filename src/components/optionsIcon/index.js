import "./style.css";

const OptionsIcon = ({ showModel, trigger }) => {
  return (
    <>
      <div onClick={trigger} className="options-icon">
        <p onClick={showModel}>...</p>
      </div>
    </>
  );
};

export default OptionsIcon;
