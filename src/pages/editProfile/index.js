import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "../../components/form";
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
import jwt_decode from "jwt-decode";
const initialProfile = {
  firstName: "person",
  lastName: "personlastname",
  userName: "username",
  githubUsername: "githubuser5000",
  email: "test@test.com",
  phone: "4835798248",
  biography: "this is the bio",
  githubUrl: "www.github.com/something",
  password: "password",
  image: "",
  role: "student",
};

const EditProfile = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [formState, setFormState] = useState(profile);
  const [readOnly, setReadOnly] = useState(false)
  const [passwordPermission, setPasswordPermission] = useState(true)
  const [loggedInUserInfo, setLoggedInUserInfo] = useState("")
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate()
  const { id } = useParams()
  const ProfileImg = () => {
    if (profile.profileImageUrl === "") {
      return <ProfileCircle
        initials={`${profile.firstName[0]} ${profile.lastName[0]}`}
      />
    }
    else { return (<img className="profile-icon" src={profile.profileImageUrl} alt="profile Image"></img>); }

  };
  const { openModal, setModal } = useModal();

  const getUserInfo = async () => {
    const { userId } = jwt_decode(token);
    const res = await get(`users/${userId}`);
    console.log("RESPONSE: ", res.data.user);
    setLoggedInUserInfo(res.data.user);
  };

  const showModal = (event) => {
    event.preventDefault()
    setModal(<SaveChangesModal id={id} formState={formState} />);
    openModal();
  };
  const cancelChanges = () => {
    navigate(-1)
  }
  const controlPagePermission = () => {
    if (loggedInUserInfo.role === "STUDENT" & loggedInUserInfo.id !== profile.id) {
      setIsError(true)
      return (
        <ErrorMessage message={"User does not have permission to edit this profile "} />
      )
    }
  }

  const handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    const newFormState = { ...formState }
    newFormState[name] = value
    setFormState(newFormState)
  }

  const token = localStorage.getItem("token");
  useEffect(() => {
    getUserInfo()
    if (loggedInUserInfo.role === "STUDENT") {
      setReadOnly(true)
      console.log("this is the read onlystatus", readOnly)
    }
    if (loggedInUserInfo.id === profile.id) {
      setPasswordPermission(false)

    }
    const profileData = async () => {
      const res = await get(`users/${id}`);

      res.data.user ? setFormState(res.data.user) : setIsError(true);
      res.data.user ? setProfile(res.data.user) : setIsError(true)
      console.log("RESPONSE from GET: ", res.data.user)
      // console.log("success or fail?", res.data.status)
      console.log("this is form state", formState)
      console.log("this is id", id)
    };
    profileData()
    console.log("this is the password permiossion", passwordPermission)
    console.log("this is profile.id", profile.id)
    controlPagePermission()

  }, [id])
  console.log("this is the profile", profile)



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
                <p>{profile.specialism}this is the specialism</p>
              </div>
            </div>

            <form onSubmit={showModal}>
              <section className="basicInfoSection text-input-containers">
                <h2>Basic Info</h2>
                <div className="headshot-container">
                  <ProfileImg />
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

              {profile.role === "STUDENT" ?
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
                    name="cohort_id"
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
                  <h2>Proffessional Info</h2>
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
              </section>
              <section className="bioSection">
                <h2>Bio</h2>
                <textarea label="Bio" name="biography" value={formState.biography} editable rows={20} maxLength="300" onChange={handleChange} />
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

/* */