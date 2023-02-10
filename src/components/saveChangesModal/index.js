import { useNavigate } from "react-router-dom"
import { useState } from "react";
import useModal from "../../hooks/useModal"
import './style.css'
import Button from '../button'
import Toast from '../toast'
import { patch } from "../../service/apiClient";
import ErrorMessage from "../errorMessage";

const SaveChangesModal = ({ formState, id, loggedInUserInfo }) => {
    const [isError, setIsError] = useState(false)
    const { closeModal } = useModal()
    const navigate = useNavigate()
    const handleDontSave = () => {       
            closeModal()
            navigate(`/profile/${id}`)
    }

    const handleCancel = () => {
        closeModal()
        navigate(`/profile/${id}/edit`)
    }

    const handleSave = () => {
        handleSubmit()
        if(isError === false){
            closeModal()
            navigate(`/profile/${id}`)
        }
        if(isError === true){
            console.log("there is an error")
        }
        return (
            <Toast text="profile saved!" linkText="Edit" linkTo="/profile/edit" />
        )
    }
    const handleSubmit = () => {
        const editedProfile = formState
        const formDataPATCH = async () => {
            const endpoint = `users/${id}`
            const data = {
                email: editedProfile.email,
                password: editedProfile.password,
                firstName: editedProfile.firstName,
                lastName: editedProfile.lastName,
                biography: editedProfile.biography,
                githubUrl: editedProfile.githubUrl
            }
            if (loggedInUserInfo.role === "TEACHER") {
                data.role = editedProfile.role
                data.cohortId = editedProfile.cohortId
              }
            
            patch(endpoint, editedProfile)
                .catch((error) => { setIsError(true) })
        }
        formDataPATCH()
    }
    return (
        <>
            <section className="save-changes-details">
                <h4>Save changes to profile?</h4>
                <p>Do you want to save these changes to your profile?</p>
                {isError === true && <ErrorMessage message={"Cannot save changes"} />}
            </section>

            <section className="save-changes-actions">
                <Button
                    onClick={handleDontSave}
                    text='dont save'
                    classes="offwhite width-full"
                />
                <Button
                    onClick={handleCancel}
                    text='cancel'
                    classes="offwhite width-full"
                />
                <Button
                    onClick={handleSave}
                    value="save"
                    text='save'
                    classes="blue width-full"
                />
            </section>
        </>
    )

}

export default SaveChangesModal;