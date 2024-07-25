import useUser from "../../hooks/useUser"

export default function UserProfileIcon({onClick=null}) {
    const { currentUser } = useUser()
    if(!currentUser || !currentUser?.firstName){
        return <div className="profile-icon" onClick={onClick}/>
    }

    const userInitials = currentUser?.firstName[0].toUpperCase() + currentUser?.lastName[0].toUpperCase()
    
    return (
        <div className="profile-icon" onClick={onClick}>
            <p>{userInitials}</p>
        </div>
    )
}
