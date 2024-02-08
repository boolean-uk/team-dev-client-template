import { useState } from "react";
import OptionsIcon from "../optionsIcon";
import ProfileCircle from "../profileCircle";
import "./style.css";
import ProfileContextMenu from "../ProfileContextMenu";

const UserCard = ({ user, contextMenu }) => {

    const [triggerContextMenu, setTriggerContextMenu] = useState(false)
    console.log(triggerContextMenu)
    

    if (!user.firstName || !user.lastName) {
        return;
    }

    const initials = user.firstName?.charAt(0) + user.lastName?.charAt(0);

    return (
        <>
            
                <section className="user">
                    <ProfileCircle initials={initials} />
                    <div className="user-info">
                        <div className="user-name">
                            <strong>
                                {user.firstName} {user.lastName}
                            </strong>
                        </div>
                        <div className="user-title">{user.title}</div>
                    </div>
                    <div className="edit-icon-wrapper">
                        <OptionsIcon trigger={ () => setTriggerContextMenu(!triggerContextMenu)} />
                    </div>
                </section>
               { triggerContextMenu ? <ProfileContextMenu user={user} /> : ""}
        </>
    );
};

export default UserCard;
