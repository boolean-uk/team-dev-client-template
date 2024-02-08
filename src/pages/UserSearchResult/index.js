import { NavLink } from "react-router-dom";
import BackArrowIcon from "../../assets/icons/backArrowIcon";

const UserSearchResult = () => {
  return (
    <div style={{ display: "flex" }}>
      <NavLink to="/">
        <BackArrowIcon
          width="48px"
          height="48px"
          top="120px"
          left="239px"
          icon="Arrow Back"
        />
      </NavLink>{" "}
      <p style={{ marginLeft: "10px", marginTop: "10px" }}>Search results</p>
    </div>
  );
};

export default UserSearchResult;
