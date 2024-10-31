import React, { useContext } from 'react';
import Form from '../../../components/form';
import { ProfileContext } from '..';

const BioForm = () => {
  const { profile, handleBioChange, isEditMode } = useContext(ProfileContext);
  const maxLength = 300;
  const isMaxLengthReached = profile.bio.length >= maxLength;

  return (
    <div className="profile-grid-section-bio">
      <div className="profile-grid-section">
        <Form>
          <hr className="section-divider" />
          <h3 className="profile-info-header">Bio</h3>
          <label htmlFor="bio">Bio</label>
          <div className={`profile-grid-section ${isEditMode ? '' : 'read-only'}`}>
            <textarea
              onChange={handleBioChange}
              name="bio"
              value={profile.bio}
              placeholder="Tell us about yourself, your professional interests and educational highlights to date..."
              maxLength={300}
              id="bio"
            ></textarea>
            <div className="info-container">
              <p className="info-text">{profile.bio.length}/300</p>
              {isMaxLengthReached && <p className="error-text">Max length is 300 characters</p>}
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BioForm;
