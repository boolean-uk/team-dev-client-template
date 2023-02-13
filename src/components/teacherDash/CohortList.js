import { useEffect, useState } from "react"
import { get } from "../../service/apiClient";

import CascadingMenu from "../cascadingMenu";
import useModal from "../../hooks/useModal";

import SquareBracketsIcon from "../../assets/icons/squareBracketsIcon";


const CohortList = () => {
  const [cohorts, setCohorts] = useState([]);

  const { openModal, setModal } = useModal();

  const showModal = () => {
    setModal("Create a post", <CascadingMenu className="cascading-menu-modal"/>); 
    openModal();
  };


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

              <div className="edit-icon"
                onClick={() => {
                  showModal();
                }
                }>
                <p>...</p>
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