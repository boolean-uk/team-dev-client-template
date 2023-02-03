import { useState, useEffect } from "react";

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

  //   console.log("THE PROFILE DATA => ", profile);

  useEffect(() => {
    // console.log("checking options", options);
    if (profile)
      if (!token) {
        console.log("ERROR!!");
      } else {
        fetch(`http://localhost:4000/users/1`, options)
          .then((response) => response.json())
          .then((responseData) => {
            console.log("checking Data", responseData);
            setProfile(responseData.data.user);

            /* console.log(
            "first name from data ==> ",
            responseData.data.user.firstName
          );

          console.log("email => ", responseData.data.user.email);

          console.log("PROFILE => ", responseData.data.user); */
          });
      }
  }, []);

  // If successfull response, add the data to the state
  //

  console.log("THE PROFILE DATA => ", profile);
  return (
    <>
      {/* create the jsx for the all details */}
      <div className="">
        <p>profile</p>
      </div>
    </>
  );
}

export default ViewProfile;
