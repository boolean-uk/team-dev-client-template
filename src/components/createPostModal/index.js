import { useState } from "react"
import useModal from "../../hooks/useModal"
import './style.css'
import Button from '../button'

const CreatePostModal = (user, userId) => {
    // Use the useModal hook to get the closeModal function so we can close the modal on user interaction
    const { closeModal } = useModal()

    const [message, setMessage] = useState(null)
    const [text, setText] = useState('')

    const newPost = {
        "userId": userId,
        "user": {
            "id": userId,
            "email": user.user.email,
            "role": user.user.role,
            "cohortId": user.user.cohort_id,
            "profile": {
                "id": userId,
                "userId": userId,
                "firstName": user.user.firstName,
                "lastName": user.user.lastName,
                "bio": user.user.biography,
                "githubUrl": user.user.githubUrl
            }
        },
        "content": text,
        "createdAt": "",
        "updatedAt": ""
    }
    console.log(newPost)

    const onChange = (e) => {
        setText(e.target.value)
    }

    const onSubmit = () => {
        setMessage('Submit button was clicked! Closing modal in 2 seconds...')

        setTimeout(() => {
            setMessage(null)
            closeModal()
        }, 2000)
    }

    return (
        <>
            <section className="create-post-user-details">
                <div className="profile-icon"><p>AJ</p></div>
                <div className="post-user-name"><p>{user.firstName}{user.lastName}</p></div>
            </section>

            <section>
                <textarea onChange={onChange} value={text} placeholder="What's on your mind?"></textarea>
            </section>

            <section className="create-post-actions">
                <Button
                    onClick={onSubmit}
                    text='Post'
                    classes={`${text.length ? 'blue' : 'offwhite' } width-full`}
                    disabled={!text.length}
                />
            </section>

            {message && <p>{message}</p>}
        </>
    )
}

export default CreatePostModal