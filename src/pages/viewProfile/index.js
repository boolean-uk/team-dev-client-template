import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import "../../pages/viewProfile/viewProfile.css";
import Card from "../../components/card";
import ProfileCircle from "../../components/profileCircle";
import { useParams } from "react-router-dom";
import { get } from "../../service/apiClient";
import jwt_decode from "jwt-decode";

const initialState = {
  id: "",
  email: "",
  role: "",
  cohort_id: "",
  firstName: "",
  lastName: "",
  biography: "",
  githubUrl: "",
  specialism: "",
};
// TODO:
// update the hard-coded details in the initial state and update it on jsx too. (when server team updates data)
// fix the card and background in the browser.
// add the onclick event to the "edit" button.
// fix the routing (Benji says that it's not our problem)

function ViewProfile() {
  // STATES
  const [profile, setProfile] = useState(initialState);
  const [loggedInUserInfo, setLoggedInUserInfo] = useState({});

  console.log("USER INFO: ", loggedInUserInfo);

  // GLOBAL VARIABLES
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("token");

  // These are the initial values, which will be changed after a successfull data request from server
  // Create useEffect to fetch the data
  // https://team-dev-server-c8-c9.fly.dev/users/{id}
  // If the response is 400+ then display an error message.
  // Error message will be: Cannot view profile

  const getUserInfo = async () => {
    const { userId } = jwt_decode(token);
    const res = await get(`users/${userId}`);
    // console.log("RESPONSE: ", res.data.user.role);
    setLoggedInUserInfo(res.data.user);
  };

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
      getUserInfo();

      fetch(`http://localhost:4000/users/${id}`, options)
        .then((response) => response.json())
        .then((responseData) => {
          // console.log("checking Data", responseData);

          // If successfull response, add the data to the state
          // console.log("NEW DATA: ", profile);
          setProfile(responseData.data.user);
        });
    }
  }, [id]);

  const goToEditPage = () => {
    // This will work once we have files for edit page
    navigate(`/profile/edit/${id}`);
  };

  return (
    <>
      {/* create the jsx for the all details */}
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
                <p>{profile.phone}</p>
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
              {profile.role === "STUDENT" && (
                <div>
                  <h3>Training info</h3>
                </div>
              )}
              {profile.role === "TEACHER" && (
                <div>
                  <h3>Professional info</h3>
                </div>
              )}

              <div>
                <h4>Role</h4>
                <p>{profile.role}</p>
              </div>
              <div>
                <h4>Specialism</h4>
                <p>{profile.specialism}</p>
              </div>

              {profile.role === "STUDENT" && (
                <>
                  <div>
                    <h4>Cohort</h4>
                    <p>Cohort {profile.cohort_id}</p>
                  </div>
                  <div>
                    <h4>Start Date</h4>
                    <p>N/A</p>
                  </div>
                  <div>
                    <h4>End Date</h4>
                    <p>N/A</p>
                  </div>
                </>
              )}

              {profile.role === "TEACHER" && (
                <div>
                  <h4>Job Title</h4>
                  <p>CSS Grids Intructor</p>
                </div>
              )}
            </div>

            {/* NOTE: Currently, the logged-in user is always a teacher (Rick Sanchez)
                 therefore, the button will always be shown 
                 (until server team adds function to login as student).
                 
                 You can comment out loggedInUserInfo.role === "TEACHER",
                 to see 2 alternative results: 
                 1) /profile/1 does NOT show edit button
                 2) /profile/2 shows edit button
                 */}

            <div className="edit-button">
              {(loggedInUserInfo.id === profile.id ||
                loggedInUserInfo.role === "TEACHER") && (
                <Button
                  text="Edit"
                  classes="green width-full"
                  onClick={goToEditPage}
                />
              )}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default ViewProfile;
