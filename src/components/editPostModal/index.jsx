import { useState, useEffect } from 'react'
import useModal from '../../hooks/useModal'
import './style.css'
import Button from '../button'
import UserProfileIcon from '../UserProfileIcon'
import UserDetails from '../UserDetails'
import PostModalActions from '../PostModalActions'

const EditPostModal = () => {
    const { closeModal } = useModal()
    const [message, setMessage] = useState(null)
    const [text, setText] = useState('')

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
                <UserProfileIcon/>
                <UserDetails/>
            </section>

            <section>
                <textarea
                    onChange={onChange}
                    value={text}
                    placeholder="Edit your post"
                ></textarea>
            </section>

            <PostModalActions onSubmit={onSubmit} text={text}/>

            {message && <p>{message}</p>}
        </>
    )
}

export default EditPostModal
