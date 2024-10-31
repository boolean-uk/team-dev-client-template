import FullLogo from '../../assets/fullLogo';
import useAuth from '../../hooks/useAuth';
import './style.css';
import Card from '../card';
import ProfileIcon from '../../assets/icons/profileIcon';
import CogIcon from '../../assets/icons/cogIcon';
import LogoutIcon from '../../assets/icons/logoutIcon';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

const Header = () => {
  const { token, onLogout } = useAuth();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const location = useLocation();
  const { userId } = jwt_decode(token);

  const onClickProfileIcon = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  useEffect(() => {
    setIsMenuVisible(false);
  }, [location]);

  if (!token) {
    return null;
  }

  return (
    <header>
      <FullLogo textColour="white" />

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
                  <NavLink to={`/profile/${userId}`}>
                    <ProfileIcon /> <p>Profile</p>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <CogIcon /> <p>Settings &amp; Privacy</p>
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
  );
};

export default Header;
