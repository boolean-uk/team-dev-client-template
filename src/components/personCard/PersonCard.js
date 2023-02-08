import ProfileCircle from "../../components/profileCircle";
import './style.css'

const PersonCard = ({ person }) => {

    const name = `${person.firstName} ${person.lastName}`
    const userInitials = name.match(/\b(\w)/g)

    return (
        <li className="personCard">
            <ProfileCircle initials={userInitials}/>
            <div className="nameCohort">
                <p className="personName">{name}</p>
                {person.role === 'STUDENT' && <p className="cohortInfo">{`{Specialization}`}, Cohort {person.cohort_id}</p>}
                {person.role === 'TEACHER' && <p className="cohortInfo">Teacher</p>}
            </div>
            <button className="profile">
                <p className="text-blue1">Profile</p>
            </button>

            <div className="edit-icon">
                <p className="text-blue1">...</p>
            </div>
        </li>
    )
}

export default PersonCard