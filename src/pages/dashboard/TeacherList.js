import { useEffect, useState } from "react"
import ProfileCircle from "../../components/profileCircle";

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
                    <section className="create-post-user-details lists-teacher-view">
                        <ProfileCircle
                            // initials={initials}
                            initials={userInitials}
                        />
                        <p className="list-user-name">{teacher.firstName}{teacher.lastName}</p>
                        <div className="edit-icon">
                            <p>...</p>
                        </div>
                    </section>
                )
            })
            }
        </>

    );
}

export default TeacherList;