import ProfileIcon from '../../../assets/icons/profileIcon';
import Form from '../../../components/form';
import TextInput from '../../../components/form/textInput';
import UploadPhotoModal from '../../../components/uploadPhotoModal';
import useModal from '../../../hooks/useModal';

const StepOne = ({ data, setData, setPhoto }) => {
  const { openModal, setModal } = useModal();

  const setPhotoData = (photoData) => {
    setPhoto(photoData);
  };

  const showModal = () => {
    setModal('Upload a photo', <UploadPhotoModal setPhotoData={setPhotoData} />);
    openModal();
    console.log('Upload photo modal opened');
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
            <ProfileIcon colour="#28C846" background="#64DC78" />
            <p onClick={showModal} className="text-blue1">
              Add headshot
            </p>
          </div>
          <p className="welcome-form-profileimg-error">Please upload a valid image file</p>
        </div>
        <div className="welcome-form-inputs">
          <TextInput
            onChange={setData}
            value={data.firstName}
            name="firstName"
            label={'First name'}
          />
          <TextInput onChange={setData} value={data.lastName} name="lastName" label={'Last name'} />
          <TextInput
            onChange={setData}
            value={data.githubUsername}
            name="githubUsername"
            label={'Github Username'}
          />
          <p className="text-blue1">*Required</p>
        </div>
      </Form>
    </>
  );
};

export default StepOne;
