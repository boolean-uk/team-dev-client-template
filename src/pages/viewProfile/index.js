import "../../pages/viewProfile/viewProfile.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/button";
import Card from "../../components/card";
import ProfileCircle from "../../components/profileCircle";
import ErrorMessage from "../../components/errorMessage";
import useAuth from "../../hooks/useAuth";
import { emptyProfile } from "../../service/mockData";
import { get } from "../../service/apiClient";

// TODO:
// update the hard-coded start date, end date and job title in the initial state and update it on jsx too. (when server team updates data)

function ViewProfile() {
  // STATES
  const [profile, setProfile] = useState(emptyProfile);
  const [isError, setIsError] = useState(false);

  // GLOBAL VARIABLES
  const navigate = useNavigate();
  const { id } = useParams();
  const { loggedInUserInfo } = useAuth();

  // GET profile data. If res is undefined, then show error page
  useEffect(() => {
    navigate(`/profile/${id}`);

    const profileData = async () => {
      const res = await get(`users/${id}`);
      res.data.user ? setProfile(res.data.user) : setIsError(true);
    };
    profileData();
  }, [id, navigate]);

  const goToEditPage = () => {
    // This will work once we have files for edit page
    navigate(`/profile/${id}/edit`);
  };

  return (
    <>
      {isError === true && <ErrorMessage message={"PROFILE NOT FOUND"} />}
      {isError === false && (
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
                      <p>Hardcoded</p>
                    </div>
                    <div>
                      <h4>End Date</h4>
                      <p>Hardcoded</p>
                    </div>
                  </>
                )}

                {profile.role === "TEACHER" && (
                  <div>
                    <h4>Job Title</h4>
                    <p>Hardcoded</p>
                  </div>
                )}
              </div>
              <div className="edit-button">
                {loggedInUserInfo !== undefined ? (
                  (loggedInUserInfo.id === profile.id ||
                    loggedInUserInfo.role === "TEACHER") && (
                    <Button
                      text="Edit"
                      classes="green width-full"
                      onClick={goToEditPage}
                    />
                  )
                ) : (
                  <></>
                )}
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}

export default ViewProfile;
