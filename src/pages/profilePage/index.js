import { createContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { user } from '../../service/mockData';
import Card from '../../components/card';
import './profilePage.css';
import ProfileHeader from './components/ProfileHeader';
import BasicInfoForm from './components/BasicInfoForm';
import TrainingInfoForm from './components/TrainingInfoForm';
import ContactInfoForm from './components/ContactInfoForm';
import BioForm from './components/BioForm';
import Button from '../../components/button';

// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import useAuth from '../../hooks/useAuth';

export const ProfileContext = createContext();

const UserProfile = ({ isEditMode }) => {
  const navigate = useNavigate();
  const { profileId } = useParams();
  const [profile, setProfile] = useState(null);
  const [rollbackProfile, setRoolbackProfile] = useState(null);
  const [initials, setInitials] = useState('');
  const [isCurrentUserProfile, setIsCurrentUserProfile] = useState(false);
  const [isCurrentUserTeacher, setIsCurrentUserTeacher] = useState(false);

  const { token, role } = useAuth();
  const { userId } = jwt_decode(token);

  const fetchProfile = () => {
    setProfile(user.user);
    setRoolbackProfile(user.user);
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
    if (userId === Number(profileId)) {
      setIsCurrentUserProfile(true);
    }
    if (role === 'TEACHER') {
      setIsCurrentUserTeacher(true);
    }
  }, [profileId]);

  const handleSubmit = (e) => {
    // Handle form submission
    e.preventDefault();
    navigate(`/profile/${userId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleBioChange = (event) => {
    handleInputChange(event);
  };

  const handleCancel = () => {
    setProfile(rollbackProfile);
    navigate(`/profile/${userId}`);
  };

  const formatRole = (role) => {
    if (!role) return '';
    return role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
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
    formatRole,
    handleBioChange,
    isEditMode,
    isCurrentUserProfile,
    isCurrentUserTeacher
  };

  return (
    <main className="profile-page-main">
      <h2 className="profile-header">Profile</h2>
      <ProfileContext.Provider value={contextValues}>
        <Card>
          <ProfileHeader />
          <section className="profile-grid">
            <BasicInfoForm />
            <TrainingInfoForm />
            <ContactInfoForm />
            <BioForm />
            <p className="info-text required-text">*Required</p>
            {isEditMode ? (
              <>
                <div className="button-group">
                  <Button
                    text="Cancel"
                    type="button"
                    classes="button cancel-button"
                    onClick={handleCancel}
                  />

                  <Button
                    text="Submit"
                    type="submit"
                    classes="button submit-button"
                    onClick={handleSubmit}
                  />
                </div>
              </>
            ) : (
              (isCurrentUserProfile || isCurrentUserTeacher) && (
                <Button
                  text="Edit"
                  type="button"
                  classes="button edit-button"
                  onClick={() => {
                    navigate(`/profile/${profileId}/edit`);
                  }}
                />
              )
            )}
          </section>
        </Card>
      </ProfileContext.Provider>
    </main>
  );
};

export default UserProfile;
