import { useEffect, useState } from "react"
import { get } from "../../service/apiClient";
import useModal from "../../hooks/useModal";

import ProfileCircle from "../profileCircle";
import CascadingMenu from "../cascadingMenu";



const TeacherList = () => {
    const [teachers, setTeachers] = useState([]);

    const { openModal, setModal } = useModal();

    const showModal = () => {
      setModal("Create a post", <CascadingMenu className="cascading-menu-modal"/>); 
      openModal();
    };

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
                            showModal();
                          }
                          }>
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