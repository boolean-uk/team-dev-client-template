import { useState, useParams, useEffect} from "react";
import Form from "../../components/form";
import TextInput from "../../components/form/textInput";
import Button from "../../components/button";
import ProfileCircle from "../../components/profileCircle";
import Card from "../../components/card";
import { useNavigate } from "react-router-dom";
import "./style.css"; 


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
  const [formState, setFormState] = useState([]);
  const navigate = useNavigate()
  // const {id} = useParams()
  const ProfileImg = () => {
    return <img src={profile.image} alt="profileImg"></img>;
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
          <h4>
            {profile.firstName} {profile.lastName}
          </h4>
          <p>{profile.specialism}</p>
        </div>

        <form>
          <section className="basicInfoSection">
            <h2>Basic Info</h2>
             <Button text={ProfileImg}/> 
            <TextInput
              label="First Name*"
              name="first-name"
              value={profile.firstName}
              onChange={handleChange}
            />
            <TextInput
              label="Last Name*"
              name="last-name"
              value={profile.lastName}
              onChange={handleChange}
            />
            <TextInput
              label="Username*"
              name="user-name"
              value={profile.userName}
              onChange={handleChange}
            />
            <TextInput
              label="GitHub Username*"
              name="gitHubUserName"
              value={profile.githubUsername}
              onChange={handleChange}
            />
          </section>

          <section className="contactInfoSection">
            <h2>Contact Info</h2>
            <TextInput
              label="Email*"
              name="email"
              value={profile.email}
              type="email"
              onChange={handleChange}
            />
            <TextInput
              label="Mobile*"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
            />
            <TextInput
              label="Password*"
              name="password"
              value={profile.password}
              type="password"
              onChange={handleChange}
            />
          </section>
          <section className="trainingInfoSection">
            <h2>Training Info</h2>
            <TextInput
              label="Role*"
              name="role"
              value={profile.role}
              onChange={handleChange}
            />
            <TextInput
              label="Specialism*"
              name="specialism"
              value={profile.specialism}
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
              value={profile.endDate}
              onChange={handleChange}
            />
          </section>
          <section className="bioSection">
            <h2>Bio</h2>
            <TextInput label="Bio" name="bio" value={profile.bio} onChange={handleChange}/>
          </section>
        </form>
        <button>Cancel</button>
        <button >Save</button>
      </Card>
      </div>
      
    </>
  );
};
export default EditProfile;

/* */