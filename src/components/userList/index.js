// @ts-nocheck

import ProfileCircle from "../profileCircle";

const UserList = ({ users }) => {
  return (
    <>
      {users.map((user) => {
        const initials = `${user.firstName[0].toUpperCase()} ${user.lastName[0].toUpperCase()}`;
        console.log(initials);
        return (
          <>
            <ProfileCircle initials={initials} />
            <div>
              {user.firstName} {user.lastName}
            </div>
            <div>{user.title}</div>
						<div className="edit-icon"><p>...</p></div>
          </>
        );
      })}
    </>
  );
};

export default UserList;
