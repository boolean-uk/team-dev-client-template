import UserCard from "../userCard";

const UsersList = ({ users }) => {
    if (!users || users.length === 0) {
        return <></>
    }
    return (
        <>
           {users.map(user => {
            return <UserCard user={user} /> 
           }
            )}
        </>
    )
}

export default UsersList



