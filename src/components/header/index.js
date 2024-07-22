import FullLogo from '../../assets/fullLogo'
import useAuth from '../../hooks/useAuth'
import './style.css'
import Card from '../card'
import ProfileIcon from '../../assets/icons/profileIcon'
import CogIcon from '../../assets/icons/cogIcon'
import LogoutIcon from '../../assets/icons/logoutIcon'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import useUser from '../../hooks/useUser'

const Header = () => {
    const { token, onLogout } = useAuth()
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const { currentUser, userFullName, userInitials, userCohort } = useUser()

    const onClickProfileIcon = () => {
        setIsMenuVisible(!isMenuVisible)
    }

    if (!token) {
        return null
    }

    return (
        <header>
            <FullLogo textColour="white" />

            <div className="profile-icon" onClick={onClickProfileIcon}>
                <p>{userInitials}</p>
            </div>

            {isMenuVisible && (
                <div className="user-panel">
                    <Card>
                        <section className="post-details">
                            <div className="profile-icon">
                                <p>{userInitials}</p>
                            </div>

                            <div className="post-user-name">
                                <p>{userFullName}</p>
                                <small>
                                    {currentUser.role},{' '}
                                    {userCohort}
                                </small>
                            </div>
                        </section>

                        <section className="user-panel-options border-top">
                            <ul>
                                <li>
                                    <NavLink to="/">
                                        <ProfileIcon /> <p>Profile</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">
                                        <CogIcon />{' '}
                                        <p>Settings &amp; Privacy</p>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="#" onClick={onLogout}>
                                        <LogoutIcon /> <p>Log out</p>
                                    </NavLink>
                                </li>
                            </ul>
                        </section>
                    </Card>
                </div>
            )}
        </header>
    )
}

export default Header
