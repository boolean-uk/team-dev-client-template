import { useState, useParams } from "react";
import Form from "../../components/form";
import TextInput from "../../components/form/textInput";
import Button from "../../components/button";
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
};

const editProfile = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [formState, setFormState] = useState();

  return (
    <>
      <Form>
        <div>
          <h2>Basic Info</h2>
          <TextInput label="First Name*" name="first-name" value={profile.firstName} ></TextInput>
          <TextInput label="Last Name*" name="last-name" value={profile.lastName} ></TextInput>
          <TextInput label="Username*" name="user-name" value={profile.userName}></TextInput>
          <TextInput label="GitHub Username*" name="gitHubUserName" value={profile.githubUsername}></TextInput>
        </div>

        <div>
            <h2>Contact Info</h2>
          <TextInput label="Email*" name="email" value={profile.email} type="email"></TextInput>
          <TextInput label="Mobile*" name="phone" value={profile.phone}></TextInput>
          <TextInput label="Password*" name="password" value={profile.password} type="password"></TextInput>
        </div>
        <div>
            <h2>Training Info</h2>
          <TextInput label="Role*" name="role" value={profile.role}></TextInput>
          <TextInput label="Specialism*" name="specialism" value={profile.specialism}></TextInput>
          <TextInput label="Cohort*" name="cohort" value={profile.cohort}></TextInput>
          <TextInput label="Start Date*" name="start-date" value={profile.startDate}></TextInput>
          <TextInput label="End Date*" name="end-date" value={profile.endDate}></TextInput>
        </div>
        <div>
        <h2>Bio</h2>
          <TextInput label="Bio" name="bio" value={profile.bio}></TextInput>
        </div>
      </Form>
      <Button text="Cancel"></Button>
      <Button text="Save"></Button>
    </>
  );
};
