import { useEffect, useState } from 'react';
import Card from '../../components/card';
import './style.css';
import { getCohorts } from '../../service/apiClient';

const Cohort = () => {
  const [cohort, setCohort] = useState([]);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchCohorts = async () => {
      const cohorts = await getCohorts();
      // Divert the teacher and students into separate arrays for easy access. Later, this would be not using cohort[0] but depending on which cohort is selected.
      setStudents(cohorts[0].users.filter((user) => user.role === 'STUDENT'));
      setTeachers(cohorts[0].users.filter((user) => user.role === 'TEACHER'));
      setCohort(cohorts);
    };
    fetchCohorts();
  }, []);

  if (cohort.length === 0) {
    return (
      <div className="loading">
        <h4>Fetching Cohorts</h4>
        <div className="loadingscreen-loader">
          <span></span>
        </div>
      </div>
    );
  }

  /* This is the main component for the cohort page. 
    For future use, there will be a dropdown to select the cohort depending on the current user that is logged in.
    As of now, the data is showing the first cohort in the database. Does not matter who is logged in.
  */
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
              {/* Need to only fetch the cohort from current user that is logged in. Then maybe create a drop down to see a specific cohort. */}
              <p>
                {cohort[0].name}, Cohort {cohort[0].id}
              </p>
              <small>
                {new Date(cohort[0].startDate).toLocaleString('default', {
                  month: 'long',
                  year: 'numeric'
                })}{' '}
                -{' '}
                {/* ADD space between the dash, ESLINT removs it, therefore I Added {' '}  and {' '} */}
                {new Date(cohort[0].endDate).toLocaleString('default', {
                  month: 'long',
                  year: 'numeric'
                })}
              </small>
            </div>
          </div>
          {/* This is where the list of students will go, User-list is the parent div for all the students */}
          <div className="user-list">
            {/* 
            This is a student card and it uses the profile-icon of the first letter.  
            Loop then through and fetch all the user data from the cohort. */}
            {students.length > 0 ? (
              students.map((user) => {
                return user.role === 'STUDENT' ? (
                  <div className="student-card" key={user.id}>
                    <div className="post-details">
                      <div className="profile-icon">
                        <p>
                          {user.profile.firstName.charAt(0) + '' + user.profile.lastName.charAt(0)}
                        </p>
                      </div>
                      <div className="post-user-name cohort-student-name">
                        <p>
                          {user.profile.firstName} {user.profile.lastName}
                        </p>
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
                ) : null;
              }, [])
            ) : (
              <h3>No students in this Cohort</h3>
            )}
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
            {teachers.length >= 1 ? (
              teachers.map((teacher) => {
                return (
                  <section className="post-details" key={teacher.id}>
                    <div className="profile-icon">
                      <p>
                        {teacher.profile.firstName.charAt(0) +
                          '' +
                          teacher.profile.lastName.charAt(0)}
                      </p>
                    </div>

                    <div className="post-user-name">
                      <p>
                        {teacher.profile.firstName} {teacher.profile.lastName}
                      </p>
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
                );
              })
            ) : (
              <h3>No teachers in this Cohort</h3>
            )}
          </div>
        </Card>
      </aside>
    </>
  );
};

export default Cohort;
