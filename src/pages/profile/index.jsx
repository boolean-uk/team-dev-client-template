import Card from "../../components/card";
import UserDetails from "../../components/UserDetails";
import UserProfileIcon from "../../components/UserProfileIcon";
import TextInput from "../../components/form/textInput";
import Form from "../../components/form";
import Button from "../../components/button";
import "./profile.css";
import useUser from "../../hooks/useUser";
import { useState, useEffect } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    githubUsername: "",
    role: "",
    cohortId: "",
    email: "",
    bio: "",
  });

  const { currentUser } = useUser();

  useEffect(() => {
    setFormData(currentUser);
  }, [currentUser]);



  const handleSubmit = (e) => {};

  const handleChange = (e) => {};

  return (
    <main>
      <h2>Profile</h2>
      <Card>
        <div className="user-detail-card">
          <UserProfileIcon />
          <UserDetails header={true} />
        </div>
        <Form onSubmit={handleSubmit}>
          {formData &&
            Object.keys(formData).map((input, index) => {
              return (
                <TextInput
                  onChange={handleChange}
                  className="profile-input"
                  key={index}
                  name={input}
                  label={input}
                  value={formData[input]}
                />
              );
            })}
          <Button type={"submit"} text={"Save"} />
        </Form>
      </Card>
    </main>
  );
};

export default Profile;
