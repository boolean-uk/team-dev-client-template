import { useContext } from 'react';
import { ProfileContext } from '..';
import Form from '../../../components/form';
import TextInput from '../../../components/form/textInput';
import ProfileCircle from '../../../components/profileCircle';

const BasicInfoForm = () => {
  const { handleInputChange, profile, initials, isEditMode } = useContext(ProfileContext);

  return (
    <div className="profile-grid-section">
      <Form>
        <hr className="section-divider" />
        <h3 className="profile-info-header">Basic Info</h3>
        <div className={`profile-grid-section ${isEditMode ? '' : 'read-only'}`}>
          <div className="photo-section">
            <span className="photo-label">Photo</span>
            <div className="profile-circle-wrapper">
              <ProfileCircle initials={initials} />
              <span className="add-headshot">Add headshot</span>
            </div>
          </div>
          <TextInput
            name="firstName"
            label="First Name*"
            value={profile.firstName}
            onChange={handleInputChange}
            type="text"
            isRequired={true}
          />
          <TextInput
            name="lastName"
            label="Last Name*"
            value={profile.lastName}
            onChange={handleInputChange}
            type="text"
            isRequired={true}
          />
          <TextInput
            name="username"
            label="Username*"
            value={profile.username}
            onChange={handleInputChange}
            type="text"
            isRequired={true}
          />
          <TextInput
            name="githubUsername"
            label="Github Username*"
            value={profile.githubUsername}
            onChange={handleInputChange}
            type="text"
            isRequired={true}
          />
        </div>
      </Form>
    </div>
  );
};

export default BasicInfoForm;
