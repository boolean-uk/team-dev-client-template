import { useState, useEffect } from "react"
import Comment from "../comment"
import ProfileCircle from "../profileCircle"
import ArrowRightIcon from "../../assets/icons/arrowRightIcon"
import "./style.css"

const CreateComment = (props) => {
    const [text, setText] = useState("")

    const name = `${props.user.firstName} ${props.user.lastName}`
    const userInitials = name.match(/\b(\w)/g)

    const newComment = {
        userId: props.userId,
        user: {
            id: props.userId,
            // email: props.user.email,
            // role: props.user.role,
            // cohortId: props.user.cohort_id,
            profile: {
                id: props.userId,
                userId: props.userId,
                // firstName: props.user.firstName,
                // lastName: props.user.lastName,
                // bio: props.user.biography,
                // githubUrl: props.user.githubUrl,
            },
        },
        content: text,
        createdAt: "",
        updatedAt: "",
    }

    function handleSubmit(event) {
        event.preventDefault()
        // Here we will need to post the comment to the server
        // Note what needs to be posted with the request and the variable names
        // apiClient does not have a bit for comments, may need to wait until the comments are done server side
        // comment.push(newComment)
        // console.log(comment)
        console.log(newComment.user)      
    }

    function handleChange(event) {
        setText(event.target.value)
    }

    return (
        <section>
            <div> 
                {/* profile circle of user that is logged in, will need to update this, maybe to do with authenication token?*/}
                <ProfileCircle initials={userInitials} />
            </div>
            <div>
                <form className="commentPost">
                    <input
                        type="text"
                        required
                        placeholder="Add a comment..."
                        onChange={handleChange}
                        // value={text}
                    />
                    <button id="commentSubmitArrow" name="submit" onClick={handleSubmit}>
                            <ArrowRightIcon />                                
                                
                    </button>
                </form>
                        
            </div>
        </section>
    )
}

export default CreateComment