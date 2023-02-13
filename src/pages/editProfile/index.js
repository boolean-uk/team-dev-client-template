import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TextInput from "../../components/form/textInput";
import Button from "../../components/button";
import ProfileCircle from "../../components/profileCircle";
import Card from "../../components/card";
import { useNavigate } from "react-router-dom";
import useModal from "../../hooks/useModal";
import ErrorMessage from "../../components/errorMessage";
import "./style.css";
import SaveChangesModal from "../../components/saveChangesModal"
import { get } from "../../service/apiClient";
import { emptyProfile } from "../../service/mockData";
import useAuth from "../../hooks/useAuth";
import ProfileImg from "../../components/profileImage/ProfileImage";


const EditProfile = () => {
  const [profile, setProfile] = useState(emptyProfile);
  const [formState, setFormState] = useState(emptyProfile);
  const [readOnly, setReadOnly] = useState(false)
  const [passwordPermission, setPasswordPermission] = useState(false)
  const [isError, setIsError] = useState(false);
  const [hasUserEnterdPassword, setHasUserEnterdPassword] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()
  const [userId, setUserId] = useState(id)
  const { openModal, setModal } = useModal();
  const { loggedInUserInfo } = useAuth();

  const showModal = (event) => {
    event.preventDefault()
    if (!formState.password) {
      setHasUserEnterdPassword(true)
    }
    else {
      setModal(<SaveChangesModal loggedInUserInfo={loggedInUserInfo} id={userId} formState={formState} />);
      setHasUserEnterdPassword(false)
      openModal();
    }
  };
  const cancelChanges = () => {
    navigate(`profile/${userId}`)
  }

  const handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    const newFormState = { ...formState }
    newFormState[name] = value

    setFormState(newFormState)
  }

  const profileData = async () => {
    const res = await get(`users/${userId}`);
    res.data.user ? setFormState(res.data.user) : setIsError(true);
    res.data.user ? setProfile(res.data.user) : setIsError(true)
  };

  const controlPagePermission = () => {
    if (!userId) {
      return
    }
    if (loggedInUserInfo.role === "STUDENT" && loggedInUserInfo.id !== Number(userId)) {
      navigate(`profile/${userId}`)
    }
    if (loggedInUserInfo.role === "STUDENT") {
      setReadOnly(true)
    }
    if (loggedInUserInfo.id !== Number(userId)) {
      setPasswordPermission(true)
    }
  }
  useEffect(() => {
    if (id !== userId) {
      setUserId(id)
    }
    profileData()
    controlPagePermission()
  }, [userId])

  return (
    <>
      {isError === true && <ErrorMessage message={"PROFILE NOT FOUND"} />}
      {isError === false && (
        <div className="editContainer">
          <h1>Profile</h1>
          <Card>
            <div className="profile-header">
              <ProfileCircle
                initials={`${profile.firstName[0]} ${profile.lastName[0]}`}
              />
              <div className="profile-header-text">
                <h4>
                  {profile.firstName} {profile.lastName}
                </h4>
                <p>{profile.specialism}</p>
              </div>
            </div>
            <form className="edit-profile-form" onSubmit={showModal}>
              <section className="basicInfoSection text-input-containers">
                <h2>Basic Info</h2>
                <div className="headshot-container">
                  <ProfileImg profile={profile} />
                  <p>Add headshot</p>
                </div>
                <TextInput
                  label="First Name*"
                  name="firstName"
                  value={formState.firstName}
                  onChange={handleChange}
                />
                <TextInput
                  label="Last Name*"
                  name="lastName"
                  value={formState.lastName}
                  onChange={handleChange}
                />
                <TextInput
                  label="Username*"
                  name="userName"
                  value={formState.userName}
                  onChange={handleChange}
                />
                <TextInput
                  label="GitHub Username*"
                  name="githubUrl"
                  value={formState.githubUrl}
                  onChange={handleChange}
                />
              </section>
              {profile.role === "" || profile.role === "STUDENT" ?
                <section className="trainingInfoSection text-input-containers">
                  <h2>Training Info</h2>
                  <TextInput
                    label="Role*"
                    name="role"
                    value={formState.role.toLocaleLowerCase()}
                    onChange={handleChange}
                    readOnly={readOnly}
                  />
                  <TextInput
                    label="Specialism*"
                    name="specialism"
                    value={formState.specialism}
                    onChange={handleChange}
                    readOnly={readOnly}
                  />
                  <TextInput
                    label="Cohort*"
                    name="cohortId"
                    value={formState.cohort_id}
                    onChange={handleChange}
                    readOnly={readOnly}
                  />
                  <TextInput
                    label="Start Date*"
                    name="start-date"
                    value={formState.startDate}
                    onChange={handleChange}
                    readOnly={readOnly}
                  />
                  <TextInput
                    label="End Date*"
                    name="end-date"
                    value={formState.endDate}
                    onChange={handleChange}
                    readOnly={readOnly}
                  />
                </section>
                :
                <section className="proffesional-info-section">
                  <h2>Professional Info</h2>
                  <TextInput
                    label="Role*"
                    name="role"
                    value={profile.cohort}
                    onChange={handleChange}
                  />
                  <TextInput
                    label="Specialism*"
                    name="specialism"
                    value={formState.specialism}
                    onChange={handleChange}
                  />
                  <TextInput
                    label="Job Title*"
                    name="jobTitle"
                    value={formState.specialism}
                    onChange={handleChange}
                  />
                </section>
              }
              <section className="contactInfoSection">
                <h2>Contact Info</h2>
                <TextInput
                  label="Email*"
                  name="email"
                  value={formState.email}
                  type="email"
                  onChange={handleChange}
                />
                <TextInput
                  label="Mobile*"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                />
                <TextInput
                  label="Password*"
                  name="password"
                  value={formState.password}
                  type="password"
                  onChange={handleChange}
                  permission={passwordPermission}
                />
                {hasUserEnterdPassword && <ErrorMessage message={"Please add a password to submit changes"} />}
              </section>
              <section className="bioSection">
                <h2>Bio</h2>
                <textarea label="Bio" name="biography" value={formState.biography} rows={20} maxLength="300" onChange={handleChange} />
                <label htmlFor="bio" >{formState.biography.length}/300</label>
              </section>
              <section className="footer">
                <p>Required*</p>
                <Button text={"Cancel"} onClick={cancelChanges} classes="offwhite width-full" />
                <Button text={"save"} type={"submit"} classes="blue width-full" />
              </section>
            </form>
          </Card>
        </div>
      )}
    </>
  );
};
export default EditProfile;