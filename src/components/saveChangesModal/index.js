// Start point taken from createPostModal

import { useState } from "react"
import useModal from "../../hooks/useModal"
import './style.css'
import Button from '../button'

const SaveChangesModal = () => {
    // Use the useModal hook to get the closeModal function so we can close the modal on user interaction
    const { closeModal } = useModal()

    console.log("modal is working")

    const onSubmit = (event) => {
        if (event.target.value = "cancel") {
            console.log("cancel working")
        } if (event.target.value === "dontSave") {
            console.log("don't save working")
        } if (event.target.value === "save") {
            console.log("save working")
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
                    onClick={onSubmit}
                    text='dont save'
                    value="dontSave"
                    classes="offwhite width-full"
                />
                <Button
                    onClick={onSubmit}
                    value="cancel"
                    text='cancel'
                    classes="offwhite width-full"
                />
                <Button
                    onClick={onSubmit}
                    value="save"
                    text='save'
                    classes="blue width-full"
                />
            </section>
        </>
    )
}

export default SaveChangesModal