import { useState } from "react";
import AddIcon from "../../assets/icons/addIcon";
import CohortIcon from "../../assets/icons/cohortIcon";
import CohortIconFill from "../../assets/icons/cohortIcon-fill";
import DeleteIcon from "../../assets/icons/deleteIcon";
import MonitorIcon from "../../assets/icons/monitorIcon";
import ProfileIcon from "../../assets/icons/profileIcon";
import SquareBracketsIcon from "../../assets/icons/squareBracketsIcon";
import Menu from "../menu";
import MenuItem from "../menu/menuItem";
import "./style.css";
import { useTranslation } from "react-i18next";

const ProfileCircle = ({ initials }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return (
    <div
      className="profile-circle"
      onClick={() => setIsMenuVisible(!isMenuVisible)}
    >
      {isMenuVisible && <CascadingMenu />}

      <div className="profile-icon">
        <p>{initials}</p>
      </div>
    </div>
  );
};

const CascadingMenu = () => {
  const {t} = useTranslation()
  return (
    <Menu className="profile-circle-menu">
      <MenuItem icon={<ProfileIcon />} text={t('profile')} />
      <MenuItem icon={<AddIcon />} text={t('addNote')} />

      <MenuItem icon={<CohortIcon />} text={t("moveToCohort")}>
        <MenuItem icon={<SquareBracketsIcon />} text={t('softwareDevelopment')}>
          <MenuItem icon={<CohortIconFill />} text={`${t('cohort')} 1`} />
          <MenuItem icon={<CohortIconFill />} text={`${t('cohort')} 2`} />
          <MenuItem icon={<CohortIconFill />} text={`${t('cohort')} 3`} />
        </MenuItem>

        <MenuItem icon={<MonitorIcon />} text={t('frontendDevelopment')}>
          <MenuItem icon={<CohortIconFill />} text={`${t('cohort')} 1`} />
          <MenuItem icon={<CohortIconFill />} text={`${t('cohort')} 2`} />
          <MenuItem icon={<CohortIconFill />} text={`${t('cohort')} 3`} />
        </MenuItem>
      </MenuItem>

      <MenuItem icon={<DeleteIcon />} text={t('deleteStudent')} />
    </Menu>
  );
};

export default ProfileCircle;
