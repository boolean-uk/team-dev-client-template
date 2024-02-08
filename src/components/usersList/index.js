import UserCard from "../userCard";

const UsersList = ({ users }) => {
    if (!users || users.length === 0) {
        return <></>
    }
    return (
        <>
           {users.map((user, index) => {
            return <UserCard key={`usercardKey${index}`} user={user} /> 
           }
            )}
        </>
    )
}

export default UsersList



