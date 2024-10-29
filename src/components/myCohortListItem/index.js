import ProfileCircle from '../profileCircle';

const MyCohortListItem = ({ user }) => {
  return (
    <section className="cohort-list-user" key={user.id}>
      <ProfileCircle
        initials={(user.firstName && user.firstName[0]) + (user.lastName && user.lastName[0])}
      />
      <div className="cohort-list-details">
        <p>
          {user.firstName} {user.lastName}
        </p>
      </div>
      <div className="edit-icon">
        <p>...</p>
      </div>
    </section>
  );
};

export default MyCohortListItem;
