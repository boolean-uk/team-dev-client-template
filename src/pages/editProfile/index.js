import { useState, useParams } from "react";
import Form from "../../components/form";
import TextInput from "../../components/form/textInput";
import Button from "../../components/button";
import ProfileCircle from "../../components/profileCircle";
import Card from "../../components/card";
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

  const ProfileImg = () => {
    return <img src={profile.image} alt="profileImg"></img>;
  };
  const handleChange = () => {
    
  }

  return (
    <>
      <h1>Profile</h1>
      <Card>
        <div>
          <ProfileCircle
            initials={`${profile.firstName[0]} ${profile.lastName[0]}`}
          />
          <h2>
            {profile.firstName} {profile.lastName}
          </h2>
          <p>{profile.specialism}</p>
        </div>

        <form>
          <div>
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
          </div>

          <div>
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
          </div>
          <div>
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
          </div>
          <div>
            <h2>Bio</h2>
            <TextInput label="Bio" name="bio" value={profile.bio} onChange={handleChange}/>
          </div>
        </form>
        <Button text="Cancel"/>
        <Button text="Save"/>
      </Card>
    </>
  );
};
export default EditProfile;