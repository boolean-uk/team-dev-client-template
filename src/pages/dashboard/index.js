import { useState } from "react";
import SearchIcon from "../../assets/icons/searchIcon";
import Button from "../../components/button";
import Card from "../../components/card";
import CreatePostModal from "../../components/createPostModal";
import TextInput from "../../components/form/textInput";
import Posts from "../../components/posts";
import useModal from "../../hooks/useModal";
import "./style.css";
import useAuth from "../../hooks/useAuth";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { get } from "../../service/apiClient";

import CohortList from "./CohortList";
import TeacherList from "./TeacherList";
import StudentList from "./StudentList"

const Dashboard = () => {
  const { token } = useAuth();
  const { userId } = jwt_decode(token);

  const [searchVal, setSearchVal] = useState("");
  const [user, setUser] = useState({
    userId: "",
    user: {
      id: "",
      email: "",
      role: "",
      cohort_id: "",
      profile: {
        id: "",
        userId: "",
        firstName: "",
        lastName: "",
        bio: "",
        githubUrl: "",
      },
    },
  });
  // C.L caus I dont wanna refresh page
console.log("user after fetchuser in dashboard index", user)
  useEffect(() => {
    const getUserInfo = async () => {
      const res = await get(`users/${userId}`);
      setUser(res.data.user);
    };
    getUserInfo();
  }, [userId]);

  const onChange = (e) => {
    setSearchVal(e.target.value);
  };

  // Use the useModal hook to get the openModal and setModal functions
  const { openModal, setModal } = useModal();

  // Create a function to run on user interaction
  const showModal = () => {
    // Use setModal to set the header of the modal and the component the modal should render
    setModal("Create a post", <CreatePostModal user={user} />); // CreatePostModal is just a standard React component, nothing special

    // Open the modal!
    openModal();
  };

  return (
    <>
      <main>
        <Card>
          <div className="create-post-input">
            <div className="profile-icon">
              <p>AJ</p>
            </div>
            <Button
              text="What's on your mind?"
              onClick={() => {
                showModal();
              }}
            />
          </div>
        </Card>

        <Posts />
      </main>

      <aside>
        <Card>
          <form onSubmit={(e) => e.preventDefault()}>
            <TextInput
              icon={<SearchIcon />}
              value={searchVal}
              name="Search"
              onChange={onChange}
            />
          </form>
        </Card>

        {/* student dash */}
        {/* <Card>
          <h4>My Cohort</h4>
        </Card> */}

        {/* Teacher Dash */}
        <Card>
          <h4>Cohorts</h4>
          <CohortList user={user}/>
        </Card>

        <Card>
          <h4>Students</h4>
          <StudentList />
        </Card>

        <Card>
          <h4>Teachers</h4>
          <TeacherList />
        </Card>

      </aside>
    </>
  );
};

export default Dashboard;
