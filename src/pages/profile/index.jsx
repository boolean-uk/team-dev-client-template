import React from 'react';
import { useParams } from 'react-router-dom';
// import useAuth from '../../hooks/useAuth';

const Profile = () => {
  // const { onCreateProfile } = useAuth();
  const { id } = useParams();
  return (
    <div>
      <p>Hello World {id}!!</p>
    </div>
  );
};

export default Profile;
