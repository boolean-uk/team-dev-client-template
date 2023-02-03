import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";


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

function ViewProfile() {
  // STATES
  const [profile, setProfile] = useState(initialState);

  // These are the initial values, which will be changed after a successfull data request from server


  // Create useEffect to fetch the data
  // https://team-dev-server-c8-c9.fly.dev/users/{id}
  // If the response is 400+ then display an error message.
  // Error message will be: Cannot view profile
useEffect(() => {
  fetch(`http://localhost:4000/users/{id}`)
  .then (response => response.json())
  .then ((data) => {
    console.log("checking Data", data)
    setProfile()
  })
},[])
  // If successfull response, add the data to the state
  //

  return (<>
  {/* create the jsx for the all details */}
  <div className="" ></div>




  </>
  )
}

export default ViewProfile;
