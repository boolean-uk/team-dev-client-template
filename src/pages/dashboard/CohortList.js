import { useEffect, useState } from "react"

import CohortCircle from "../../components/cohortCircle";
import SquareBracketsIcon from "../../assets/icons/squareBracketsIcon";
import { get } from "../../service/apiClient";


const CohortList = () => {
    const [cohorts, setCohorts] = useState([]);

    useEffect(() => {
        const getUserInfo = async () => {
          const res = await get(`users?cohortId`);
          setCohorts(res.data.users);
        };
        getUserInfo();
      }, []);

console.log("cohorts", cohorts)

return (
    <div>
      {cohorts &&
        cohorts.map((cohort) => {
          return (
            <section className="create-post-user-details lists-teacher-view">
              <div className="profile-icon-cohort bg-green">
                <p><SquareBracketsIcon /></p>
              </div>

              <div className="post-user-name">
                <p>Cohort {cohort.cohort_id === null ? "(null)" : `${cohort.cohort_id}`}</p>
              </div>

              <div className="edit-icon">
                <p>...</p>
              </div>
            </section>
          );
        })}
    </div>
  );
}
    


export default CohortList;