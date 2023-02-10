import FullLogo from "../../assets/fullLogo"
import useAuth from "../../hooks/useAuth"
import useOnOutsideClick from "../../hooks/useOnOutsideClick"
import './style.css'
import Card from "../card"
import ProfileIcon from "../../assets/icons/profileIcon"
import CogIcon from "../../assets/icons/cogIcon"
import LogoutIcon from "../../assets/icons/logoutIcon"
import { NavLink } from "react-router-dom"
import { useRef, useState } from "react"

const Header = () => {
    const { token, onLogout } = useAuth()
    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const menuRef = useRef(null)
    const { loggedInUserInfo: user } = useAuth()

    useOnOutsideClick(menuRef,()=>setIsMenuVisible(false))
     
    const onClickProfileIcon = () => {
        setIsMenuVisible(true)
    }

    if (!token) {
        return null
    }

    return (
        <header>
            <FullLogo textColour="white" />

            <div className="profile-icon" onClick={onClickProfileIcon} ><p>AJ</p></div>

            {isMenuVisible &&
                <div className="user-panel" ref={menuRef}>
                    <Card>
                        <section className="post-details">
                            <div className="profile-icon">
                                <p>{user.firstName[0].toUpperCase()}{user.lastName[0].toUpperCase()}</p>
                            </div>

                            <div className="post-user-name">
                                <p>{user.firstName} {user.lastName}</p>
                                {user.role === 'TEACHER' ?
                                    <small>Teacher</small>
                                :
                                    <small>Software Developer, Cohort {user.cohort_id}</small>
                                }
                            </div>
                        </section>

                        <section className="user-panel-options border-top">
                            <ul>
                                <li><NavLink to='/'><ProfileIcon /> <p>Profile</p></NavLink></li>
                                <li><NavLink to='/'><CogIcon /> <p>Settings &amp; Privacy</p></NavLink></li>
                                <li><NavLink to='#' onClick={onLogout}><LogoutIcon /> <p>Log out</p></NavLink></li>
                            </ul>
                        </section>
                    </Card>
                </div>
            }
        </header>
    )
}

export default Header