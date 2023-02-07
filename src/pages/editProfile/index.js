import { useState, useParams, useEffect} from "react";
import Form from "../../components/form";
import TextInput from "../../components/form/textInput";
import Button from "../../components/button";
import ProfileCircle from "../../components/profileCircle";
import Card from "../../components/card";
import { useNavigate } from "react-router-dom";
import useModal from "../../hooks/useModal";
import "./style.css"; 
import SaveChangesModal from "../../components/saveChangesModal"


const initialProfile = {
  firstName: "person",
  lastName: "personlastname",
  userName: "username",
  githubUsername: "githubuser5000",
  email: "test@test.com",
  phone: "4835798248",
  bio: "this is the bio",
  githubUrl: "www.github.com/something",
  password: "password",
  image: "",
};
// create function to return JSX of the profile image to pass to the add img button

const EditProfile = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [formState, setFormState] = useState(profile);
  const navigate = useNavigate()
  // const {id} = useParams()
  const ProfileImg = () => {
    return <img src={profile.image} alt="profileImg"></img>;
  };
  const { openModal, setModal } = useModal();

  // Model -----
  // Create a function to run on user interaction
  // Use setModal to set the header of the modal and the component the modal should render
  // Pass handleSubmit function
  // If save is pressed on modal - run handleSubmit then navigate back to profile page 
  // if cancel - navigate back to edit
  // if don't save - navigate back to profile page

  const showModal = () => {
    setModal(<SaveChangesModal handleSubmit={handleSubmit} />);
    // Open the modal!
    openModal();
};

  const handleChange = (event) => {
    const value = event.target.value
    const name = event.target.name
    const newFormState = {...formState}
    newFormState[name] = value
    setFormState(newFormState) 
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("form submitted")
    const editedProfile = formState
    const editedProfileJSON = JSON.stringify(editedProfile)

    const options = {
      method: "PATCH",
      body: editedProfileJSON,
      headers: {
        "Content-Type" : "application/json"
      }
    }
    fetch(`https://team-dev-server-c8-c9.fly.dev/users/`, options )
      .then((res) => res.json())
      .then((data) => {
        console.log("edited profile:", data)
      })
  }
  
// create function to return JSX of the profile image to pass to the add img button
  useEffect(() => {
    
    // navigate("/profile/edit")
    console.log("viewing edit page") 
  }, [])
  

  return (
    <>
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

        <form>
          <section className="basicInfoSection">
            <h2>Basic Info</h2>
             <Button text={ProfileImg}/> 
            <TextInput
              label="First Name*"
              name="first-name"
              value={formState.firstName}
              onChange={handleChange}
            />
            <TextInput
              label="Last Name*"
              name="last-name"
              value={formState.lastName}
              onChange={handleChange}
            />
            <TextInput
              label="Username*"
              name="user-name"
              value={formState.userName}
              onChange={handleChange}
            />
            <TextInput
              label="GitHub Username*"
              name="gitHubUserName"
              value={formState.githubUsername}
              onChange={handleChange}
            />
          </section>

          
          <section className="trainingInfoSection">
            <h2>Training Info</h2>
            <TextInput
              label="Role*"
              name="role"
              value={formState.role}
              onChange={handleChange}
            />
            <TextInput
              label="Specialism*"
              name="specialism"
              value={formState.specialism}
              onChange={handleChange}
            />
            <TextInput
              label="Cohort*"
              name="cohort"
              value={profile.cohort}
              onChange={handleChange}
            />
            <TextInput
              label="Start Date*"
              name="start-date"
              value={profile.startDate}
              onChange={handleChange}
            />
            <TextInput
              label="End Date*"
              name="end-date"
              value={formState.endDate}
              onChange={handleChange}
            />
          </section>
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
            />
          </section>
          <section className="bioSection">
            <h2>Bio</h2>
            <textarea label="Bio" name="bio" value={formState.bio} multiline={true} editable numberOfLines={4} onChange={handleChange}/>
          </section>
        <Button text={"Cancel"} classes="offwhite width-full"/>
        <Button text={"save"} onClick={showModal} classes="blue width-full" />
        </form>
        {/* <button>Cancel</button>
        <button >Save</button> */}
      </Card>
      </div>
      
    </>
  );
};
export default EditProfile;

/* */