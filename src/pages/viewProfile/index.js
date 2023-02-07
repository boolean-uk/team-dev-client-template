import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import Header from "../../components/header";
import Navigation from "../../components/navigation";
import "../../pages/viewProfile/viewProfile.css";
import Card from "../../components/card";
import ProfileCircle from "../../components/profileCircle";
import { useParams } from "react-router-dom";

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
// TODO:
// update the other details in the initial state and update it on jsx too.
// fix the card and background in the browser.
// add the onclick event to the "edit" button.
// fix the  routing. 



function ViewProfile() {
  // STATES
  const [profile, setProfile] = useState(initialState);
  const navigate = useNavigate();
  const {id} = useParams()
  console.log("checking params:", id)
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
    if (!token) {
      console.log("ERROR!!");
    } else {
      navigate(`/profile/${id}`);
      fetch(`http://localhost:4000/users/${id}`, options)
        .then((response) => response.json())
        .then((responseData) => {
          console.log("checking Data", responseData);
          // If successfull response, add the data to the state
          console.log("NEW DATA: ", profile);
          setProfile(responseData.data.user);
        });
    }
   
  }, [id]);
 
  // console.log("THE PROFILE DATA => ", profile);
  return (
    <>
      {/* create the jsx for the all details */}

      <div>
        <div className="card-container">
          <Card>
      
            <div className="profile-details">
              <div className="profile-header">
                <h2>
                  <ProfileCircle
                    initials={`${profile.firstName[0]}${profile.lastName[0]}`}
                  />
                </h2>
                <h2>
                  {profile.firstName} {profile.lastName}
                </h2>
              </div>

              <div className="profile-contact">
                <h3>Contact details</h3>

                <div>
                  <h4>Email </h4>
                  <p>{profile.email}</p>
                </div>

                <div>
                  <h4>Mobile Number</h4>
                  <p>+123456789</p>
                </div>

                <div>
                  <h4>Github Username</h4>
                  <p>{profile.githubUrl}</p>
                </div>
              </div>

              <div className="profile-bio">
                <h3>Biography</h3>
                <p> {profile.biography}</p>
              </div>

              <div className="profile-training">
                <h3>Training info</h3>

                <div>
                  <h4>Role</h4>
                  <p>{profile.role}</p>
                </div>

                <div>
                  <h4>Specialism</h4>
                  <p>Software Developer</p>
                </div>

                <div>
                  <h4>Cohort</h4>
                  <p>Cohort 9</p>
                </div>

                <div>
                  <h4>Start Date</h4>
                  <p>November 2022</p>
                </div>

                <div>
                  <h4>End Date</h4>
                  <p>May 2023</p>
                </div>
              </div>

              {/* add the onclick event for the button it is going to popen the edit page */}
              <div className="edit-button">
              { profile.role === "TEACHER" && <Button text="Edit" classes="green width-full" />}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default ViewProfile;
