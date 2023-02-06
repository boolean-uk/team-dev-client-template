import { useState } from "react"
import useModal from "../../hooks/useModal"
import './style.css'
import Button from '../button'
import useAuth from "../../hooks/useAuth";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import {get} from "../../service/apiClient"

const CreatePostModal = () => {
    // Use the useModal hook to get the closeModal function so we can close the modal on user interaction
    const { closeModal } = useModal()
    const { token } = useAuth()
    const { userId } = jwt_decode(token)

    const [message, setMessage] = useState(null)
    const [text, setText] = useState('')
    const [user, setUser] = useState({
        "userId": "",
        "user": {
            "id": "",
            "email": "",
            "role": "",
            "cohortId": "",
            "profile": {
                "id": "",
                "userId": "",
                "firstName": "",
                "lastName": "",
                "bio": "",
                "githubUrl": ""
            }
        },
        "content": text,
        "createdAt": "",
        "updatedAt": ""
    })

    // const newPost = {
    //     "userId": userId,
    //     "user": {
    //         "id": userId,
    //         "email": user.email,
    //         "role": user.role,
    //         "cohortId": user.cohort_id,
    //         "profile": {
    //             "id": userId,
    //             "userId": userId,
    //             "firstName": user.firstName,
    //             "lastName": user.lastName,
    //             "bio": user.biography,
    //             "githubUrl": user.githubUrl
    //         }
    //     },
    //     "content": text,
    //     "createdAt": "",
    //     "updatedAt": ""
    // }
    // console.log(newPost)

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

	useEffect(()=>{
		const getUserInfo = async () => {
			const res = await get(`users/${userId}`)
			setUser(res.data.user)
		}
        getUserInfo()
	}, [userId])
	console.log(user)

    // const userInitials = user.user.name.match(/\b(\w)/g)

    return (
        <>
            <section className="create-post-user-details">
                <div className="profile-icon"><p></p></div>
                <div className="post-user-name"><p>{`${user.firstName} ${user.lastName}`}</p></div>
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