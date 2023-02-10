import { useState } from "react";
import ProfileCircle from "../../components/profileCircle";
import CascadingMenu from "../cascadingMenu"
import './style.css'

const PersonCard = ({ person, isTeacher }) => {

    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const name = `${person.firstName} ${person.lastName}`
    const userInitials = name.match(/\b(\w)/g)

    const handleClick = () => {
        setIsMenuVisible(true)
    }

    return (
        <li className="personCard">
            <ProfileCircle initials={userInitials} hasMenu={false}/>

            <div className="nameCohort">
                <p className="personName">{name}</p>
                {person.role === 'STUDENT' && <p className="cohortInfo">{`{Specialization}`}, Cohort {person.cohort_id}</p>}
                {person.role === 'TEACHER' && <p className="cohortInfo">Teacher</p>}
            </div>

            <div className="button-wrapper">
                <button className="profile">
                    <p className="text-blue1">Profile</p>
                </button>

                {isTeacher && 
                    <button className="addNote">
                        <p className="text-blue1"> Add note</p>
                    </button>
                }

                {isTeacher &&  
                    <button className="moveToCohort"> 
                        <p className="text-blue1"> Move to cohort</p>
                    </button>
                }
            </div>

            <div className="edit-icon" onClick={handleClick}>
                <p className="text-blue1">...</p>
                {isMenuVisible && <CascadingMenu name={'searchMenu'} setIsMenuVisible={setIsMenuVisible} />}
            </div>
        </li>
    )
}

export default PersonCard