import { useNavigate } from "react-router-dom"
import { useState } from "react";
import useModal from "../../hooks/useModal"
import './style.css'
import Button from '../button'
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

    const handleSave = async () => {
        await handleSubmit()
        if (isError === false) {
            closeModal()
            navigate(`/profile/${id}`)
        }
        if (isError === true) {
            console.log("Error saving profile, Please try again")
        }

    }
    const handleSubmit = async () => {    
            const endpoint = `users/${id}`
            const data = {
                email: formState.email,
                firstName: formState.firstName,
                lastName: formState.lastName,
                biography: formState.biography,
                githubUrl: formState.githubUrl
            }
            
            if (formState.password) {
                data.password = formState.password
            }
            if (loggedInUserInfo.role === "TEACHER") {
                data.role = formState.role
                data.cohort_id = formState.cohort_id
            }
            await patch(endpoint, data)
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
                    text="don't save"
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