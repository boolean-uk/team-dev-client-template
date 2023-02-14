import { useEffect, useState } from "react"
import { get } from "../../service/apiClient";
import useOnOutsideClick from "../../hooks/useOnOutsideClick"

import ProfileCircle from "../profileCircle";
import CascadingMenu from "../cascadingMenu";


const TeacherList = () => {
    const [teachers, setTeachers] = useState([]);
    const [isMenuVisible, setIsMenuVisible] = useState(false)


    useOnOutsideClick(menu, setIsMenuVisible(false))

    useEffect(() => {
        const getUserInfo = async () => {
            const res = await get("users?role=TEACHER");
            setTeachers(res.data.users);
        };
        getUserInfo();
    }, []);

    return (
        <>
            {teachers.map(teacher => {
                const userInitials = teacher.firstName.match(/\b(\w)/g) + teacher.lastName.match(/\b(\w)/g)

                return (
                    <section key={teacher.id} className="create-post-user-details lists-teacher-view">
                        <ProfileCircle
                            initials={userInitials}
                        />

                        <div>
                            <p className="list-user-name">{teacher.firstName}{teacher.lastName}</p>
                            <p>{teacher.specialism === "" ? "Software Development" : `${teacher.specialism}`}</p>
                        </div>

                        <div className="edit-icon"
                            onClick={() => {
                                setIsMenuVisible(!isMenuVisible)
                            }
                            }
                        >
                            <p>...</p>
                        </div>
                            { isMenuVisible === true && <CascadingMenu className="center-screen"/>}
                    </ section>
                )
            })
            }
        </>
    );
}

export default TeacherList;