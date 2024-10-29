import Card from '../../components/card';
import './style.css';

const Cohort = () => {
  /* Waiting for the backend implementation of Cohort */
  return (
    <>
      <main>
        <Card>
          <div className="cohort-title">
            <h3>My Cohort</h3>
          </div>
          <div className="post-details cohort-div">
            <div className="profile-icon">
              <p>&lt; &gt;</p>
            </div>
            <div className="post-user-name">
              {/* This is where the cohort name will go */}
              <p>Software Development, Cohort 4</p>
              <small>January 2023 - June 2023</small>
            </div>
          </div>
          {/* This is where the list of students will go, User-list is the parent div for all the students */}
          <div className="user-list">
            {/* 
            This is a student card and it uses the profile-icon of the first letter. 
            Fill with proper data from the database. 
            This is just mockup data and therefore the data is static. 
            What needs to be done is to .map the data of all the ids from the cohort. 
            Loop then through and fetch all the user data from the cohort. */}
            <div className="student-card">
              <div className="post-details">
                <div className="profile-icon">
                  <p>AB</p>
                </div>
                <div className="post-user-name cohort-student-name">
                  <p>Alexander B</p>
                </div>
                {/* This is the button to view the profile of the student and need to implement action of button. */}
                <div className="student-action-button">
                  <button className="cohort-action-button">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="20" fill="#F0F5FA" />
                      <path
                        d="M15 26C16.1046 26 17 25.1046 17 24C17 22.8954 16.1046 22 15 22C13.8954 22 13 22.8954 13 24C13 25.1046 13.8954 26 15 26ZM26 24C26 25.1046 25.1046 26 24 26C22.8954 26 22 25.1046 22 24C22 22.8954 22.8954 22 24 22C25.1046 22 26 22.8954 26 24ZM35 24C35 25.1046 34.1046 26 33 26C31.8954 26 31 25.1046 31 24C31 22.8954 31.8954 22 33 22C34.1046 22 35 22.8954 35 24Z"
                        fill="#64648C"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="student-card">
              <div className="post-details">
                <div className="profile-icon">
                  <p>AJ</p>
                </div>
                <div className="post-user-name cohort-student-name">
                  <p>Alexander Jansson</p>
                </div>
                <div className="student-action-button">
                  <button className="cohort-action-button">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="20" fill="#F0F5FA" />
                      <path
                        d="M15 26C16.1046 26 17 25.1046 17 24C17 22.8954 16.1046 22 15 22C13.8954 22 13 22.8954 13 24C13 25.1046 13.8954 26 15 26ZM26 24C26 25.1046 25.1046 26 24 26C22.8954 26 22 25.1046 22 24C22 22.8954 22.8954 22 24 22C25.1046 22 26 22.8954 26 24ZM35 24C35 25.1046 34.1046 26 33 26C31.8954 26 31 25.1046 31 24C31 22.8954 31.8954 22 33 22C34.1046 22 35 22.8954 35 24Z"
                        fill="#64648C"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="student-card">
              <div className="post-details">
                <div className="profile-icon">
                  <p>AJ</p>
                </div>
                <div className="post-user-name cohort-student-name">
                  <p>Alexander Jansson</p>
                </div>
                <div className="student-action-button">
                  <button className="cohort-action-button">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="20" fill="#F0F5FA" />
                      <path
                        d="M15 26C16.1046 26 17 25.1046 17 24C17 22.8954 16.1046 22 15 22C13.8954 22 13 22.8954 13 24C13 25.1046 13.8954 26 15 26ZM26 24C26 25.1046 25.1046 26 24 26C22.8954 26 22 25.1046 22 24C22 22.8954 22.8954 22 24 22C25.1046 22 26 22.8954 26 24ZM35 24C35 25.1046 34.1046 26 33 26C31.8954 26 31 25.1046 31 24C31 22.8954 31.8954 22 33 22C34.1046 22 35 22.8954 35 24Z"
                        fill="#64648C"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="student-card">
              <div className="post-details">
                <div className="profile-icon">
                  <p>AJ</p>
                </div>
                <div className="post-user-name cohort-student-name">
                  <p>Alexander Jansson</p>
                </div>
                <div className="student-action-button">
                  <button className="cohort-action-button">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="20" fill="#F0F5FA" />
                      <path
                        d="M15 26C16.1046 26 17 25.1046 17 24C17 22.8954 16.1046 22 15 22C13.8954 22 13 22.8954 13 24C13 25.1046 13.8954 26 15 26ZM26 24C26 25.1046 25.1046 26 24 26C22.8954 26 22 25.1046 22 24C22 22.8954 22.8954 22 24 22C25.1046 22 26 22.8954 26 24ZM35 24C35 25.1046 34.1046 26 33 26C31.8954 26 31 25.1046 31 24C31 22.8954 31.8954 22 33 22C34.1046 22 35 22.8954 35 24Z"
                        fill="#64648C"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </main>

      <aside>
        <Card>
          <div className="teachers-section">
            <div className="cohort-title">
              <h3>Teachers</h3>
            </div>
            {/* This is where the list of teachers will go. Each section is a teacher. */}
            <section className="post-details">
              <div className="profile-icon">
                <p>DA</p>
              </div>

              <div className="post-user-name">
                <p>Dave Ames</p>
                <small>Software Developer</small>
              </div>
              <div className="teacher-action-button">
                <button className="cohort-action-button">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cohort-action-button"
                  >
                    <circle cx="24" cy="24" r="20" fill="#F0F5FA" />
                    <path
                      d="M15 26C16.1046 26 17 25.1046 17 24C17 22.8954 16.1046 22 15 22C13.8954 22 13 22.8954 13 24C13 25.1046 13.8954 26 15 26ZM26 24C26 25.1046 25.1046 26 24 26C22.8954 26 22 25.1046 22 24C22 22.8954 22.8954 22 24 22C25.1046 22 26 22.8954 26 24ZM35 24C35 25.1046 34.1046 26 33 26C31.8954 26 31 25.1046 31 24C31 22.8954 31.8954 22 33 22C34.1046 22 35 22.8954 35 24Z"
                      fill="#64648C"
                    />
                  </svg>
                </button>
              </div>
            </section>
            <section className="post-details">
              <div className="profile-icon">
                <p>NS</p>
              </div>
              <div className="post-user-name">
                <p>Nigel Smith</p>
                <small>Software Developer</small>
              </div>
              <div className="teacher-action-button">
                <button className="cohort-action-button">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cohort-action-button"
                  >
                    <circle cx="24" cy="24" r="20" fill="#F0F5FA" />
                    <path
                      d="M15 26C16.1046 26 17 25.1046 17 24C17 22.8954 16.1046 22 15 22C13.8954 22 13 22.8954 13 24C13 25.1046 13.8954 26 15 26ZM26 24C26 25.1046 25.1046 26 24 26C22.8954 26 22 25.1046 22 24C22 22.8954 22.8954 22 24 22C25.1046 22 26 22.8954 26 24ZM35 24C35 25.1046 34.1046 26 33 26C31.8954 26 31 25.1046 31 24C31 22.8954 31.8954 22 33 22C34.1046 22 35 22.8954 35 24Z"
                      fill="#64648C"
                    />
                  </svg>
                </button>
              </div>
            </section>
          </div>
        </Card>
      </aside>
    </>
  );
};

export default Cohort;
