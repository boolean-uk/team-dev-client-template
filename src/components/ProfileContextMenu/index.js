import "./style.css";
import ProfileIcon from "../../assets/icons/profileIcon";
import { useTranslation } from "react-i18next";

const ProfileContextMenu = ({user}) => {
    const {t} = useTranslation()
  
    return (
        <div className="profile-context-menu">
            <ProfileIcon/>
            <div className="profile-text">{t("profile")}</div>
        </div>
    )
}

export default ProfileContextMenu;
