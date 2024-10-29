import React, { useContext } from 'react';
import { ProfileContext } from '..';
import Form from '../../../components/form';
import TextInput from '../../../components/form/textInput';

const ContactInfoForm = () => {
  const { profile, handleInputChange } = useContext(ProfileContext);

  return (
    <div className="profile-grid-section">
      <Form>
        <hr className="section-divider" />
        <h3 className="profile-info-header">Contact Info</h3>
        <div className="profile-grid-section read-only">
          <TextInput
            name="email"
            label="Email*"
            value={profile.email}
            onChange={handleInputChange}
            type="email"
          />
          <TextInput
            name="mobile"
            label="Mobile*"
            value={profile.mobile}
            onChange={handleInputChange}
            type="number"
          />
          <TextInput
            name="password"
            label="Password*"
            value={profile.password}
            onChange={handleInputChange}
            type="password"
          />
        </div>
      </Form>
    </div>
  );
};

export default ContactInfoForm;
