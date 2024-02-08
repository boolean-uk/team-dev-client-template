import { NavLink } from "react-router-dom";
import BackArrowIcon from "../../assets/icons/backArrowIcon";
import "./userSearch.css"
const UserSearchResult = () => {
  return (
    <div className="user-search-result-container">
      <NavLink to="/">
        <BackArrowIcon
          width="48px"
          height="48px"
          top="308px"
          left="799px"
          color="#DCE1F0"
          icon="Arrow Back"
        
        />
      </NavLink>{" "}
      <p >Search results</p>
    </div>
  );
};

export default UserSearchResult;
