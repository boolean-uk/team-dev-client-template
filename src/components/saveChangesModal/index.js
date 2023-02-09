
import { useState, } from "react"
import { useNavigate } from "react-router-dom"
import useModal from "../../hooks/useModal"
import './style.css'
import Button from '../button'
import Toast from '../toast'
import { patch } from "../../service/apiClient";

const SaveChangesModal = ({ formState, id, loggedInUserInfo }) => {

    const { closeModal } = useModal()
    const navigate = useNavigate()
    console.log("modal is working")
    const token = localStorage.getItem("token");
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
        closeModal()
        navigate(`/profile/${id}`)
        return (
            <Toast text="profile saved!" linkText="Edit" linkTo="/profile/edit" />
        )
    }
    const handleSubmit = () => {
        console.log("form submitted")
        const editedProfile = formState

        // console.log("here is the edited profilejson > ", editedProfileJSON)

        // const options = {
        //     method: "PATCH",
        //     body: editedProfileJSON,
        //     headers: {
        //         "Content-Type": "application/json",
        //         Authorization: "Bearer " + token
        //     }
        // }
        const formDataPATCH = async () => {
            const endpoint = `users/${id}`

            // editedProfile.cohortId = editedProfile.cohort_id
            // const data = JSON.stringify(editedProfile)
            if (loggedInUserInfo.role === "STUDENT") {
                const data = {
                    email: editedProfile.email,
                    password: editedProfile.password,
                    firstName: editedProfile.firstName,
                    lastName: editedProfile.lastName,
                    biography: editedProfile.biography,
                    githubUrl: editedProfile.githubUrl
                }
            }
            if (loggedInUserInfo.role === "TEACHER") {
                const data = {
                    email: editedProfile.email,
                    password: editedProfile.password,
                    firstName: editedProfile.firstName,
                    lastName: editedProfile.lastName,
                    biography: editedProfile.biography,
                    githubUrl: editedProfile.githubUrl,
                    role: editedProfile.role,
                    cohortId: editedProfile.cohortId
                }
                console.log("here is the data", data)
                console.log("this is the edited profile", editedProfile)

                patch(endpoint, editedProfile)
                    .catch((error) => { console.log(error) })

            }
            formDataPATCH()


        }
    }
    return (
        <>
            <section className="save-changes-details">
                <h4>Save changes to profile?</h4>
                <p>Do you want to save these changes to your profile?</p>
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