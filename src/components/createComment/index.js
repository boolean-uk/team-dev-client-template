import { useState, useEffect } from "react"
import Comment from "../comment"
import ProfileCircle from "../profileCircle"
import ArrowRightIcon from "../../assets/icons/arrowRightIcon"
import "./style.css"
import { get } from "../../service/apiClient"
import useAuth from "../../hooks/useAuth";
import jwt_decode from "jwt-decode";

const CreateComment = () => {
    const { token } = useAuth();
    const { userId } = jwt_decode(token);

    const [text, setText] = useState("")

    const [searchVal, setSearchVal] = useState("");
    const [user, setUser] = useState({
        userId: "",
        user: {
            id: "",
            email: "",
            role: "",
            cohortId: "",
            profile: {
                id: "",
                userId: "",
                firstName: "",
                lastName: "",
                bio: "",
                githubUrl: "",
      },
    },
  });

  useEffect(() => {
    const getUserInfo = async () => {
      const res = await get(`users/${userId}`);
      setUser(res.data.user);
    };
    getUserInfo();
  }, [userId]);

    const name = `${user.firstName} ${user.lastName}`
    const userInitials = name.match(/\b(\w)/g)

    const newComment = {
        userId: user.userId,
        user: {
            id: user.userId,
            email: user.email,
            role: user.role,
            cohortId: user.cohort_id,
            profile: {
                id: user.userId,
                userId: user.userId,
                firstName: user.firstName,
                lastName: user.lastName,
                bio: user.biography,
                githubUrl: user.githubUrl,
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
        <section className="commentForm">
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