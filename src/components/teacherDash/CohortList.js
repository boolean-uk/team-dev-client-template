import { useEffect, useState } from "react"
import { get } from "../../service/apiClient";

import SquareBracketsIcon from "../../assets/icons/squareBracketsIcon";


const CohortList = () => {
  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    const getUserInfo = async () => {
      const res = await get(`users?cohortId`);
      setCohorts(res.data.users);
    };
    getUserInfo();
  }, []);

  return (
    <div>
      {cohorts &&
        cohorts.map(cohort => {
          return (
            <section className="create-post-user-details lists-teacher-view">
              <div className="profile-icon-cohort bg-green">
                <p><SquareBracketsIcon /></p>
              </div>

              <div >
                <p>
                  <strong>{cohort.specialism === "" ? "Software Development" : `${cohort.specialism}`}</strong>
                </p>
                <p>Cohort {cohort.cohort_id === null ? "(null)" : `${cohort.cohort_id}`}</p>
              </div>
            </section>
          );
        }
        )
      }
    </div>
  );
}




export default CohortList;