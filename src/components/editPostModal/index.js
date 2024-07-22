import { useState } from 'react'
import useModal from '../../hooks/useModal'
import './style.css'
import Button from '../button'
import useUser from '../../hooks/useUser'

const EditPostModal = () => {
    const { closeModal } = useModal()
    const [message, setMessage] = useState(null)
    const [text, setText] = useState('')
    const { userInitials, userFirstNameAndInital } = useUser()

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
                <div className="profile-icon">
                    <p>{userInitials}</p>
                </div>
                <div className="post-user-name">
                    <p>{userFirstNameAndInital}</p>
                </div>
            </section>

            <section>
                <textarea
                    onChange={onChange}
                    value={text}
                    placeholder="Edit your post"
                ></textarea>
            </section>

            <section className="create-post-actions">
                <Button
                    onClick={onSubmit}
                    text="Post"
                    classes={`${text.length ? 'blue' : 'offwhite'} width-full`}
                    disabled={!text.length}
                />
            </section>

            {message && <p>{message}</p>}
        </>
    )
}

export default EditPostModal
