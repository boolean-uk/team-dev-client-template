import { useEffect, useState } from "react";
import { get } from "../../service/apiClient";
import useModal from "../../hooks/useModal";

import CascadingMenu from "../cascadingMenu";
import ProfileCircle from "../profileCircle";
// import nameList from "placeholder"
import "./style.css";

const StudentList = () => {
    const [students, setStudents] = useState([])

    const [isMenuVisible, setIsMenuVisible] = useState(false)


    useEffect(() => {
        const getUserInfo = async () => {
            const res = await get("users?role=STUDENT");
            setStudents(res.data.users);
        };
        getUserInfo();
    }, []);

    return (
        <>
            {students.map(student => {
                const userInitials = student.firstName.match(/\b(\w)/g) + student.lastName.match(/\b(\w)/g)

                return (
                    <section key={student.id} className="create-post-user-details lists-teacher-view">

                        <ProfileCircle initials={userInitials} />
                        <div>
                            <p className="list-user-name"> {student.firstName} {student.lastName}</p>
                            <p>{student.specialism === "" ? "Software Development" : `${student.specialism}`}</p>
                        </div>
                        <div className="edit-icon"
                            onClick={() => {
                                setIsMenuVisible(!isMenuVisible)
                            }
                            }>
                            <p>...</p>
                        </div>
                            { isMenuVisible === true && <CascadingMenu className="center-screen"/>}
                    </section>
                )
            })}

            <div className="horizontal-rule"></div>

            <button className="see-all-students-button">All Students</button>

        </>
    )
}

export default StudentList