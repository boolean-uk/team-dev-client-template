import './style.css';

const MyCohortList = () => {
  return (
    <article className="cohort">
      <section className="cohort-header">
        <h4>My Cohort</h4>
        <small>Software Developer, Cohort 4</small>
      </section>
      <section className="cohort-list border-top">{/* List of users in this cohort  */}</section>
    </article>
  );
};

export default MyCohortList;
