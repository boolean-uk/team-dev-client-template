import useUser from '../../hooks/useUser'
import ProfileIcon from '../../assets/icons/profileIcon'

export default function UserProfileIcon({ onClick = null }) {
    const { currentUser } = useUser()
    if (!currentUser || !currentUser?.firstName) {
        return <ProfileIcon className="profile-icon" colour="#000000" background='#5abedc' onClick={onClick} />
    }

    const userInitials =
        currentUser?.firstName[0].toUpperCase() + currentUser?.lastName[0].toUpperCase()

    return (
        <div className="profile-icon" onClick={onClick}>
            <p>{userInitials}</p>
        </div>
    )
}
