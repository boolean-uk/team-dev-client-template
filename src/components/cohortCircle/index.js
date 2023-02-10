import { useState } from "react"
import AddIcon from "../../assets/icons/addIcon"
import CohortIcon from "../../assets/icons/cohortIcon"
import CohortIconFill from "../../assets/icons/cohortIcon-fill"
import DeleteIcon from "../../assets/icons/deleteIcon"
import MonitorIcon from "../../assets/icons/monitorIcon"
import SquareBracketsIcon from "../../assets/icons/squareBracketsIcon"
import Menu from "../menu"
import MenuItem from "../menu/menuItem"
import "./style.css"


const CohortCircle = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    return (
        <div id="cohort-circle">
            <div id="cohort-icon">
               <p><SquareBracketsIcon /></p>
            </div>
        </div>



    )
}

export default CohortCircle;