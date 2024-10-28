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
                <div className="post-user-name">
                  <p>Alexander B</p>
                </div>
              </div>
            </div>
            <div className="student-card">
              <div className="post-details">
                <div className="profile-icon">
                  <p>AJ</p>
                </div>
                <div className="post-user-name">
                  <p>Alexander Jansson</p>
                </div>
              </div>
            </div>
            <div className="student-card">
              <div className="post-details">
                <div className="profile-icon">
                  <p>AJ</p>
                </div>
                <div className="post-user-name">
                  <p>Alexander Jansson</p>
                </div>
              </div>
            </div>
            <div className="student-card">
              <div className="post-details">
                <div className="profile-icon">
                  <p>AJ</p>
                </div>
                <div className="post-user-name">
                  <p>Alexander Jansson</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </>
  );
};

export default Cohort;
