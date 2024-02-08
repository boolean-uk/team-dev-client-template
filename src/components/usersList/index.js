import UserCard from "../userCard";
import { getUsers } from "../../service/apiClient";
import { useState, useEffect } from "react";

const UsersList = () => {
    const [users, setUsers] = useState([])
  
    useEffect(() => {
        getUsers()
        .then(setUsers)
    }, [])

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



