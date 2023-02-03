import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function ViewProfile() {
  // STATES
  const [profile, setProfile] = useState(initialState);

  // These are the initial values, which will be changed after a successfull data request from server
  const initialState = {
    id: "",
    email: "",
    role: "",
    cohortId: "",
    firstName: "",
    lastName: "",
    bio: "",
    githubUrl: "",
  };

  // Create useEffect to fetch the data
  // https://team-dev-server-c8-c9.fly.dev/users/{id}
  // If the response is 400+ then display an error message.
  // Error message will be: Cannot view profile

  // If successfull response, add the data to the state
  //

  return <></>;
}

export default ViewProfile;
