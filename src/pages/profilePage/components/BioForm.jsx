import React, { useContext } from 'react';
import Form from '../../../components/form';
import { ProfileContext } from '..';

const BioForm = () => {
  const { profile, handleBioChange, bioLength } = useContext(ProfileContext);
  return (
    <div className="profile-grid-section-bio">
      <div className="profile-grid-section">
        <Form>
          <hr className="section-divider" />
          <h3 className="profile-info-header">Bio</h3>
          <label htmlFor="bio">Bio</label>
          <div className="profile-grid-section read-only">
            <textarea
              onChange={handleBioChange}
              name="bio"
              value={profile.bio}
              placeholder="Bio"
              id="bio"
            ></textarea>
            <p className="info-text">{bioLength}/300</p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default BioForm;
