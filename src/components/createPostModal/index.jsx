import { useState, useEffect } from 'react'
import useModal from '../../hooks/useModal'
import './style.css'
import Button from '../button'
import UserProfileIcon from '../UserProfileIcon'
import UserDetails from '../UserDetails'
import PostModalActions from '../PostModalActions'
import { createPost } from '../../service/apiClient'

const CreatePostModal = () => {
    const { closeModal } = useModal()

    const [message, setMessage] = useState(null)
    const [content, setContent] = useState('')

    const onChange = (e) => {
        setContent(e.target.value)
    }

    const onSubmit = async () => {
        const res = await createPost(content)

        if (res.status === "success") {
            setMessage('Submit button was clicked! Closing modal in 2 seconds...')
    
            setTimeout(() => {
                setMessage(null)
                closeModal()
            }, 2000)
        }
    }

    return (
        <>
            <section className="create-post-user-details">
                <UserProfileIcon />
                <UserDetails/>
            </section>

            <section>
                <textarea
                    onChange={onChange}
                    value={content}
                    placeholder="What's on your mind?"
                ></textarea>
            </section>

            <PostModalActions onSubmit={onSubmit} text={content}/>

            {message && <p>{message}</p>}
        </>
    )
}

export default CreatePostModal
