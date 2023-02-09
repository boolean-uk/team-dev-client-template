import { useState } from "react"
import CascadingMenu from "../cascadingMenu"
import './style.css'

const ProfileCircle = ({ initials, hasMenu = true}) => {
    const [isMenuVisible, setIsMenuVisible] = useState(false)

    return (
        <div className="profile-circle" onClick={() => setIsMenuVisible(!isMenuVisible)}>
            {isMenuVisible && hasMenu && <CascadingMenu name={'profile-circle-menu'} setIsMenuVisible={setIsMenuVisible} />}
            
            <div className="profile-icon">
                <p>{initials}</p>
            </div>
        </div>
        
    )
}

export default ProfileCircle