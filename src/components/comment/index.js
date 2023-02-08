import "./style.css"
import ProfileCircle from "../profileCircle"
import EditPostModal from "../editPostModal"
import useModal from "../../hooks/useModal"
import { useEffect } from "react"



const Comment = ({ name, content }) => {
    const { openModal, setModal } = useModal()

    const showModal = () => {
        setModal('Edit post', <EditPostModal />)
        openModal()
    }
    return (
        <>

            <div className="eachComment">
                <ProfileCircle />
                <div className="comment">
                    <h6>{name}</h6>
                     <p>{content}</p>
                </div>

                <div className="edit-icon add-margins">
                    <p onClick={showModal}>...</p>
                </div>
            </div>
        </>
    )
}

export default Comment