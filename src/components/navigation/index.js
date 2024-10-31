import { NavLink } from 'react-router-dom';
import CohortIcon from '../../assets/icons/cohortIcon';
import HomeIcon from '../../assets/icons/homeIcon';
import ProfileIcon from '../../assets/icons/profileIcon';
import useAuth from '../../hooks/useAuth';
import './style.css';

// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

const Navigation = () => {
  const { token } = useAuth();
  const { userId } = jwt_decode(token);

  if (!token) {
    return null;
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
          <NavLink to={`/profile/${userId}`}>
            <ProfileIcon />
            <p>Profile</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cohort" replace state={{ pathname: '/cohort' }}>
            <CohortIcon />
            <p>Cohort</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
