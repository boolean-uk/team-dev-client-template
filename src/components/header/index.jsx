import FullLogo from '../../assets/fullLogo'
import useAuth from '../../hooks/useAuth'
import './style.css'
import Card from '../card'
import ProfileIcon from '../../assets/icons/profileIcon'
import CogIcon from '../../assets/icons/cogIcon'
import LogoutIcon from '../../assets/icons/logoutIcon'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import UserProfileIcon from '../UserProfileIcon'
import UserDetails from '../UserDetails'

const Header = () => {
    const { token, onLogout, openMenus, setOpenMenus } = useAuth()
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    const onClickProfileIcon = (e) => {
      e.stopPropagation()
      setOpenMenus(true)
      setIsMenuVisible(true)
    };

    if (!token) {
        return null
    }

    return (
        <header>
            <FullLogo textColour="white" />

            <UserProfileIcon onClick={onClickProfileIcon} />

            {isMenuVisible && openMenus && (
                <div className="user-panel">
                    <Card>
                        <section className="post-details">
                            <UserProfileIcon />
                            <UserDetails header={true} />
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
