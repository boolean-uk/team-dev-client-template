import FullLogo from "../../assets/fullLogo"
import useAuth from "../../hooks/useAuth"
import "./style.css"
import Card from "../card"
import ProfileIcon from "../../assets/icons/profileIcon"
import CogIcon from "../../assets/icons/cogIcon"
import LogoutIcon from "../../assets/icons/logoutIcon"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import LanguageSelect from "../languageSelect"

const Header = () => {
  const { t } = useTranslation()
  const { token, onLogout } = useAuth()
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  const onClickProfileIcon = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  if (!token) {
    return null
  }

  return (
    <header>
      <FullLogo textColour="white" />
      <LanguageSelect />
      <div className="profile-icon" onClick={onClickProfileIcon}>
        <p>AJ</p>
      </div>

      {isMenuVisible && (
        <div className="user-panel">
          <Card>
            <section className="post-details">
              <div className="profile-icon">
                <p>AJ</p>
              </div>

              <div className="post-user-name">
                <p>Alex Jameson</p>
                <small>Software Developer, Cohort 3</small>
              </div>
            </section>

            <section className="user-panel-options border-top">
              <ul>
                <li>
                  <NavLink to="/">
                    <ProfileIcon /> <p>{t("profile")}</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <CogIcon />{" "}
                    <p>
                      {t("settings")} &amp; {t("privacy")}
                    </p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" onClick={onLogout}>
                    <LogoutIcon /> <p>{t("logOut")}</p>
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
