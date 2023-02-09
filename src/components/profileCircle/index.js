import { useState } from "react"
import CascadingMenu from "../CascadingMenu"
import './style.css'

const ProfileCircle = ({ initials }) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    return (
        <div className="profile-circle" onClick={() => setIsMenuVisible(!isMenuVisible)}>
            {isMenuVisible && <CascadingMenu />}
            
            <div className="profile-icon">
                <p>{initials}</p>
            </div>
        </div>
        
    )
}

 <CascadingMenu />
 

export default ProfileCircle