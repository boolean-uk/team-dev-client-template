import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Avatar from '../../components/avatar';
import { get } from '../../service/apiClient';
import useAuth from '../../hooks/useAuth';
import jwtDecode from 'jwt-decode';

const ProfilePage = () => {
  const { id } = useParams();
  const [profileUser, setProfileUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  const { token } = useAuth();

  useEffect(() => {
    const fetchUserData = async (profileId, setter) => {
      try {
        console.log('fetching users/', profileId, 'for setter', String(setter));
        const response = await get(`users/${profileId}`);
        setter(response.data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (token) {
      const loggedInId = jwtDecode(token).userId;
      fetchUserData(id, setProfileUser);
      fetchUserData(loggedInId, setLoggedInUser);
    }
  }, [id, token]);

  useEffect(() => {
    console.log('loggedInUser', loggedInUser);
    console.log('profileUser', profileUser);
  }, [profileUser, loggedInUser]);

  return (
    <div>
      <h1>Profile Page</h1>
      {profileUser ? (
        <div>
          <Avatar user={profileUser} />
          <div className="basic-info">
            <img src={profileUser.imageUrl} alt="profile" />
            <h2>Basic Info</h2>
            <p>First Name: {profileUser.firstName}</p>
            <p>Last Name: {profileUser.lastName}</p>
            <p>Github Username: {profileUser.githubUsername}</p>
          </div>

          <div className="training-info">
            <h2>Training Info</h2>
            <p>Role: {profileUser.role}</p>
            <p>Specialism: {profileUser.specialism}</p>
            <p>Cohort ID: {profileUser.cohort_id}</p>
            <p>Start Date: {profileUser.startDate}</p>
            <p>End Date: {profileUser.endDate}</p>
          </div>

          <div className="contact-info">
            <h2>Contact Info</h2>
            <p>Email: {profileUser.email}</p>
            <p>Mobile: {profileUser.mobile}</p>
            <p>Password: ******</p> {/* Placeholder for password */}
          </div>

          <div className="additional-info">
            <p>ID: {profileUser.id}</p>
            <p>Biography: {profileUser.biography}</p>
          </div>

          <div className="bio">
            <h2>Bio</h2>
            <p>{profileUser.biography}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;
