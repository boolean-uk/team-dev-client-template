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

  return (
    <>
      <h1>Profile</h1>
      <Card>
        <div>
          <ProfileCircle
            initials={`${profile.firstName[0]} ${profile.lastName[0]}`}
          ></ProfileCircle>
          <h2>
            {profile.firstName} {profile.lastName}
          </h2>
          <p>{profile.specialism}</p>
        </div>

        <Form>
          <div>
            <h2>Basic Info</h2>
            <Button text={ProfileImg}></Button>
            <TextInput
              label="First Name*"
              name="first-name"
              value={profile.firstName}
            ></TextInput>
            <TextInput
              label="Last Name*"
              name="last-name"
              value={profile.lastName}
            ></TextInput>
            <TextInput
              label="Username*"
              name="user-name"
              value={profile.userName}
            ></TextInput>
            <TextInput
              label="GitHub Username*"
              name="gitHubUserName"
              value={profile.githubUsername}
            ></TextInput>
          </div>

          <div>
            <h2>Contact Info</h2>
            <TextInput
              label="Email*"
              name="email"
              value={profile.email}
              type="email"
            ></TextInput>
            <TextInput
              label="Mobile*"
              name="phone"
              value={profile.phone}
            ></TextInput>
            <TextInput
              label="Password*"
              name="password"
              value={profile.password}
              type="password"
            ></TextInput>
          </div>
          <div>
            <h2>Training Info</h2>
            <TextInput
              label="Role*"
              name="role"
              value={profile.role}
            ></TextInput>
            <TextInput
              label="Specialism*"
              name="specialism"
              value={profile.specialism}
            ></TextInput>
            <TextInput
              label="Cohort*"
              name="cohort"
              value={profile.cohort}
            ></TextInput>
            <TextInput
              label="Start Date*"
              name="start-date"
              value={profile.startDate}
            ></TextInput>
            <TextInput
              label="End Date*"
              name="end-date"
              value={profile.endDate}
            ></TextInput>
          </div>
          <div>
            <h2>Bio</h2>
            <TextInput label="Bio" name="bio" value={profile.bio}></TextInput>
          </div>
        </Form>
        <Button text="Cancel"></Button>
        <Button text="Save"></Button>
      </Card>
    </>
  );
};
export default EditProfile;