import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const initialState = {
  id: "",
  email: "",
  role: "",
  cohortId: "",
  firstName: "",
  lastName: "",
  biography: "",
  githubUrl: "",
};

function ViewProfile() {
  // STATES
  const [profile, setProfile] = useState(initialState);
  const navigate = useNavigate();

  // These are the initial values, which will be changed after a successfull data request from server
  // Create useEffect to fetch the data
  // https://team-dev-server-c8-c9.fly.dev/users/{id}
  // If the response is 400+ then display an error message.
  // Error message will be: Cannot view profile

  const token = localStorage.getItem("token");

  const options = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  useEffect(() => {
    // if (profile)
    if (!token) {
      console.log("ERROR!!");
    } else {
      navigate("/viewprofile");
      fetch(`http://localhost:4000/users/1`, options)
        .then((response) => response.json())
        .then((responseData) => {
          console.log("checking Data", responseData);
          // If successfull response, add the data to the state
          const newProfileData = responseData.data.user;
          console.log("newProfileData: ", newProfileData);
          const updatedProfileData = { ...profile, newProfileData };
          // newProfileData.push();

          setProfile(updatedProfileData);
          console.log("NEW DATA: ", profile);
        });
    }
  }, []);

  //   console.log("THE PROFILE DATA => ", profile);

  // console.log("THE PROFILE DATA => ", profile);
  return (
    <>
      {/* create the jsx for the all details */}
      <div className="">
        <p>Something</p>
      </div>
    </>
  );
}

export default ViewProfile;
