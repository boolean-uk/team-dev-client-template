import { useEffect, useState } from "react"
import ProfileCircle from "../profileCircle";

import { get } from "../../service/apiClient";


const TeacherList = () => {
    const [teachers, setTeachers] = useState([]);

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

                        <div className="edit-icon">
                            <p>...</p>
                        </div>
                    </ section>
                )
            })
            }
        </>

    );
}

export default TeacherList;