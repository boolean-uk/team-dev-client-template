import { useState } from "react";
import MenuItem from "../menu/menuItem";
import ProfileIcon from "../../assets/icons/profileIcon";
import SquareBracketsIcon from "../../assets/icons/squareBracketsIcon";
import AddIcon from "../../assets/icons/addIcon";
import CohortIcon from "../../assets/icons/cohortIcon";
import CohortIconFill from "../../assets/icons/cohortIcon-fill";
import MonitorIcon from "../../assets/icons/monitorIcon";
import Menu from "../menu";
import DeleteIcon from "../../assets/icons/deleteIcon";


const CascadingMenu = () => {
  return (
    <Menu className="profile-circle-menu">
      <MenuItem icon={<ProfileIcon />} text="Profile" />
      <MenuItem icon={<AddIcon />} text="Add note" />

      <MenuItem icon={<CohortIcon />} text="Move to cohort">
        <MenuItem icon={<SquareBracketsIcon />} text="Software Development">
          <MenuItem icon={<CohortIconFill />} text="Cohort 1" />
          <MenuItem icon={<CohortIconFill />} text="Cohort 2" />
          <MenuItem icon={<CohortIconFill />} text="Cohort 3" />
        </MenuItem>

        <MenuItem icon={<MonitorIcon />} text="Frontend Development">
          <MenuItem icon={<CohortIconFill />} text="Cohort 1" />
          <MenuItem icon={<CohortIconFill />} text="Cohort 2" />
          <MenuItem icon={<CohortIconFill />} text="Cohort 3" />
        </MenuItem>
      </MenuItem>

      <MenuItem icon={<DeleteIcon />} text="Delete student" />
    </Menu>
  );
};
export default CascadingMenu;
