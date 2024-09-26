import "./style.css";
import ProfileIcon from "../../assets/icons/profileIcon";

const ProfileContextMenu = ({user}) => {
  
    return (
        <div className="profile-context-menu">
            <ProfileIcon/>
            <div className="profile-text">Profile</div>
        </div>
    )
}

export default ProfileContextMenu;
