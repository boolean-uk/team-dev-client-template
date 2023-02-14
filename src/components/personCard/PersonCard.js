import { useRef, useState } from "react";
import ProfileCircle from "../../components/profileCircle";
import CascadingMenu from "../cascadingMenu";
import Menu from "../menu";
import MenuItem from "../menu/menuItem";
import MonitorIcon from "../../assets/icons/monitorIcon";
import SquareBracketsIcon from "../../assets/icons/squareBracketsIcon";
import CohortIconFill from "../../assets/icons/cohortIcon-fill";
import './style.css';
import { useNavigate } from "react-router-dom";
import useOnOutsideClick from "../../hooks/useOnOutsideClick";

const PersonCard = ({ person, isTeacher }) => {

    const [isMenuVisible, setIsMenuVisible] = useState(false)
    const [isMoveVisible, setIsMoveVisible] = useState(false)
    const name = `${person.firstName} ${person.lastName}`
    const userInitials = name.match(/\b(\w)/g)

    const handleClick = () => {
        setIsMenuVisible(true)
    }

    const navigate = useNavigate()
  
    return (
        <li className="personCard">
            <ProfileCircle initials={userInitials} hasMenu={false}/>

            <div className="nameCohort">
                <p className="personName">{name}</p>
                {person.role === 'STUDENT' && <p className="cohortInfo">{`{Specialization}`}, Cohort {person.cohort_id}</p>}
                {person.role === 'TEACHER' && <p className="cohortInfo">Teacher</p>}
            </div>

            <div className="button-wrapper">
                <button onClick={() => navigate(`/profile/${person.id}`)} className="profile">
                    <p className="text-blue1">Profile</p>     
                </button>

                {isTeacher && 
                    <button className="addNote">
                        <p className="text-blue1"> Add note</p>
                    </button>
                }

                {isTeacher &&  
                    <button className="moveToCohort" onClick={()=>setIsMoveVisible(true)}> 
                        <p className="text-blue1"> Move to cohort</p>
                        {isMoveVisible && <MoveToCohortMenu setIsMoveVisible={setIsMoveVisible}/>}
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



const MoveToCohortMenu = ({ setIsMoveVisible }) => {

    const moveRef = useRef(null)

    useOnOutsideClick(moveRef, ()=>setIsMoveVisible(false))

    return (
        <div ref={moveRef}>
            <Menu className='moveMenu'>
                <MenuItem icon={<SquareBracketsIcon />} text='Software Development'>
                    <MenuItem icon={<CohortIconFill />} text='Cohort 1' />
                    <MenuItem icon={<CohortIconFill />} text='Cohort 2' />
                    <MenuItem icon={<CohortIconFill />} text='Cohort 3' />
                </MenuItem>

                <MenuItem icon={<MonitorIcon />} text='Frontend Development'>
                    <MenuItem icon={<CohortIconFill />} text='Cohort 1' />
                    <MenuItem icon={<CohortIconFill />} text='Cohort 2' />
                    <MenuItem icon={<CohortIconFill />} text='Cohort 3' />
                </MenuItem>
            </Menu>
        </div>
    )
}

export default PersonCard