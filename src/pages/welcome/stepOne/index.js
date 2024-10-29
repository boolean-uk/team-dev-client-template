import { useState } from 'react';
import ProfileIcon from '../../../assets/icons/profileIcon';
import Form from '../../../components/form';
import TextInput from '../../../components/form/textInput';

const StepOne = ({ data, setData, errors }) => {
  const [uploadedImageHex, setUploadedImageHex] = useState(data.profilePicture);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
        setUploadedImageHex(base64String);
        setData({ target: { name: 'profilePicture', value: base64String } });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="welcome-formheader">
        <h3>Basic info</h3>
      </div>
      <Form className="welcome-form">
        <div className="welcome-form-profileimg">
          <p className="text-blue1">Photo</p>
          <div className="welcome-form-profileimg-input">
            {uploadedImageHex ? (
              <img
                className="welcome-form-profileimg-icon"
                src={`data:image/png;base64,${uploadedImageHex}`}
                alt="Profile"
              />
            ) : (
              <ProfileIcon colour="#28C846" background="#64DC78" />
            )}
            <input
              className="welcome-form-profileimg-upload-button"
              type="file"
              accept="image/png, image/jpeg"
              onChange={handleImageUpload}
            />
          </div>
          <p className="welcome-form-profileimg-error">Please upload a valid image file</p>
        </div>
        <div className="welcome-form-inputs">
          <TextInput
            onChange={setData}
            value={data.firstName}
            name="firstName"
            label={'First name*'}
            isRequired={true}
          />
          <TextInput
            onChange={setData}
            value={data.lastName}
            name="lastName"
            label={'Last name*'}
            isRequired={true}
          />
          <TextInput
            onChange={setData}
            value={data.username}
            name="username"
            label={'Username*'}
            isRequired={true}
          />
          <TextInput
            onChange={setData}
            value={data.githubUsername}
            name="githubUsername"
            label={'Github Username*'}
            isRequired={true}
          />
          <p className="text-blue1">*Required</p>
        </div>
      </Form>
    </>
  );
};

export default StepOne;
