import { NavLink, useLocation } from 'react-router-dom'
import CohortIcon from '../../assets/icons/cohortIcon'
import HomeIcon from '../../assets/icons/homeIcon'
import ProfileIcon from '../../assets/icons/profileIcon'
import useAuth from '../../hooks/useAuth'
import './style.css'

const Navigation = ({ disabledNav = false }) => {
    const { token } = useAuth()
    const location = useLocation()

    if (!token) {
        return null
    }

    if (disabledNav) {
        return (
            <nav>
            <ul>
                <li>
                    <NavLink to={location.pathname} end>
                        <HomeIcon />
                        <p>Home</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={location.pathname} end>
                        <ProfileIcon />
                        <p>Profile</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={location.pathname} end>
                        <CohortIcon />
                        <p>Cohort</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
        )
    }

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
                    <NavLink to="/profile">
                        <ProfileIcon />
                        <p>Profile</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/">
                        <CohortIcon />
                        <p>Cohort</p>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
