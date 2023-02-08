// Start point taken from createPostModal

import { useState, } from "react"
import { useNavigate } from "react-router-dom"
import useModal from "../../hooks/useModal"
import './style.css'
import Button from '../button'
import Toast from '../toast'

const SaveChangesModal = ({ formState, id }) => {

    // Use the useModal hook to get the closeModal function so we can close the modal on user interaction
    const { closeModal } = useModal()
    const navigate = useNavigate()
    console.log("modal is working")
    const token = localStorage.getItem("token");
    const handleDontSave = () => {
        closeModal()
        navigate("/profile")
    }

    const handleCancel = () => {
        closeModal()
        navigate("/profile/edit")
    }

    const handleSave = () => {
        handleSubmit()
        closeModal()
        navigate("/profile/edit")
        return (
            <Toast text="profile saved!" linkText="Edit" linkTo="/profile/edit" />
        )
    }
    const handleSubmit = () => {

        console.log("form submitted")
        const editedProfile = formState
        const editedProfileJSON = JSON.stringify(editedProfile)
        console.log("here is the edited profilejson > ", editedProfileJSON)

        const options = {
            method: "PATCH",
            body: editedProfileJSON,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token
            }
        }

        fetch(`http://localhost:4000/users/${id}`, options)
        .then((res) => res.json())
        // console.log(res)
        .then((data) => {
            console.log("edited profile:", data.status)
            if (data.status === "success") {
                // do something
            } else {
                console.log("ERROR")
            }
        })
        // .catch(err => {console.log("this is the response from catch",err)})

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

export default SaveChangesModal