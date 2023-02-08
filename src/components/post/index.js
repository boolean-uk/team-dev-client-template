import useModal from "../../hooks/useModal"
import { useState, useEffect } from "react"
import Card from "../card"
import Comment from "../comment"
import EditPostModal from "../editPostModal"
import ProfileCircle from "../profileCircle"
import ArrowRightIcon from "../../assets/icons/arrowRightIcon"
import "./style.css"

const commentInitialState ={
    text: ""
}

const Post = ({ name, date, content, comments = [], id, likes = 0 }) => {
    const { openModal, setModal } = useModal()
    const [postContent, setContent] = useState(content)
    const [formState, setFormState] = useState(commentInitialState)
    const userInitials = name.match(/\b(\w)/g)

    const showModal = () => {
        setModal('Edit post', <EditPostModal content={content} id={id} setContent={setContent}/>)
        openModal()
    }

    const commentContent = () => {
        
    }



    return (
        <Card>
            <article className="post">
                <section className="post-details">
                    <ProfileCircle initials={userInitials} />

                    <div className="post-user-name">
                        <p>{name}</p>
                        <small>{date}</small>
                    </div>
                    
                    <div className="edit-icon">
                        <p onClick={showModal}>...</p>
                    </div>
                </section>

                <section className="post-content">
                    <p>{postContent}</p>
                </section>

                <section className={`post-interactions-container border-top ${comments.length ? 'border-bottom' : null}`}>
                    <div className="post-interactions">
                        <div>Like</div>
                        <div>Comment</div>
                    </div>

                    <p>{!likes && 'Be the first to like this'}</p>
                    
                </section>

                <section>
                    {comments.map(comment => <Comment key={comment.id} name={comment.name} content={comment.content} />)}
                </section>
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
                                // value={text}

                            />
                            <button id="commentSubmitArrow" name="submit">
                                <ArrowRightIcon />
                            </button>
                        </form>
                        
                    </div>
                </section>
            </article>
        </Card>
    )
}

export default Post