import { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { user } from '../../service/mockData';
import Card from '../../components/card';
import './profilePage.css';

// eslint-disable-next-line camelcase
// import jwt_decode from 'jwt-decode';
import ProfileHeader from './components/ProfileHeader';
import BasicInfoForm from './components/BasicInfoForm';
import TrainingInfoForm from './components/TrainingInfoForm';

export const ProfileContext = createContext();

const UserProfile = () => {
  const { profileId } = useParams();
  const [profile, setProfile] = useState(null);
  const [initials, setInitials] = useState('');
  // const storedToken = localStorage.getItem('token');
  // const { userId } = jwt_decode(storedToken);

  const fetchProfile = () => {
    setProfile(user.user);
    setInitials(user.user.firstName[0] + user.user.lastName[0]);
    /*     try {
      const data = await get(`profiles/${profileId}`);
      setProfile(data);
      const initials = data.user.firstName[0] + data.user.lastName[0];
      setInitials(initials);
    } catch (error) {
      console.error('Error fetching profile data:', error);
    } */
  };

  useEffect(() => {
    fetchProfile();
  }, [profileId]);

  const handleSubmit = (e) => {
    // Handle form submission
    e.preventDefault();
    console.log('Form submitted');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const formatRole = (role) => {
    if (role === 'STUDENT') {
      return 'Student';
    } else {
      return 'Teacher';
    }
  };

  if (!profile) {
    return <h1>Loading...</h1>;
  }

  const contextValues = {
    profile,
    setProfile,
    initials,
    setInitials,
    handleSubmit,
    handleInputChange,
    formatRole
  };

  return (
    <main className="profile-page-main">
      <h2 className="profile-header">Profile</h2>
      <ProfileContext.Provider value={contextValues}>
        <Card>
          <ProfileHeader />

          <section className="profile-grid">
            <BasicInfoForm />

            <TrainingInfoForm
              profile={profile}
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
              formatRole={formatRole}
            />
            <div className="profile-grid-section">
              <h4>Contact Info</h4>
              <p>Email: {profile.email}</p>
              <p>
                GitHub: <a href={profile.githubUrl}>{profile.githubUrl}</a>
              </p>
            </div>
            <div className="profile-grid-section">
              <h4>Bio</h4>
              <p>{profile.bio}</p>
            </div>
          </section>
        </Card>
      </ProfileContext.Provider>
    </main>
  );
};

export default UserProfile;
