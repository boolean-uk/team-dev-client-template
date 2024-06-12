import { NavLink } from "react-router-dom"
import CohortIcon from "../../assets/icons/cohortIcon"
import HomeIcon from "../../assets/icons/homeIcon"
import ProfileIcon from "../../assets/icons/profileIcon"
import "./style.css"

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            <HomeIcon colour="#000046" />
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <ProfileIcon />
            <p>Profile</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-cohort">
            <CohortIcon />
            <p>Cohort</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
