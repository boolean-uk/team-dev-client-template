import { useEffect, useState } from 'react';
import { getUsers } from '../../service/apiClient';
// import UserListItem from '../userListComponents/userListItem';
import './style.css';
import UserListItemCohort from '../userListComponents/userListItemCohort/UserListItemCohort';

const CohortList = (scrollable = false) => {
  const [cohort, setCohort] = useState([]);

  useEffect(() => {
    getUsers().then(setCohort);
  }, []);

  return (
    <article className="cohort">
      <section className="cohort-header">
        <h4>My cohort</h4>
        <p>Software Developer, Cohort 4</p>
      </section>
      <section className="cohort-list border-top">
        {cohort.map((user, i) => (
          <UserListItemCohort cohort={user} key={i} />
        ))}
      </section>
    </article>
  );
};

export default CohortList;
