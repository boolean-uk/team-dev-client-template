import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Avatar from '../../components/avatar';
import { get } from '../../service/apiClient';
import useAuth from '../../hooks/useAuth';
import jwtDecode from 'jwt-decode';

const ProfilePage = () => {
  const { id } = useParams();
  const [profileUser, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async (profileid, setter) => {
      try {
        const response = await get(`users/${profileid}`);
        setter(response.data.user);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    const { token } = useAuth();
    const loggedInId = jwtDecode(token).userId;

    fetchUserData(id, setUser);
    fetchUserData(loggedInId, setLoggedInUser);

    console.log('profileUser', profileUser);
    console.log('loggedInUser', loggedInUser);
  }, [id]);

  return (
    <div>
      <h1>Profile Page</h1>
      {profileUser ? (
        <div>
          <Avatar user={profileUser} />
          <p>ID: {profileUser.id}</p>
          <p>Role: {profileUser.role}</p>
          <p>Email: {profileUser.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProfilePage;
