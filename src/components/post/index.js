import LikeIcon from "../../assets/icons/likeIcon"
import CommentIcon from "../../assets/icons/commentIcon"
import useModal from "../../hooks/useModal"
import Card from "../card"
import Comment from "../comment"
import EditPostModal from "../editPostModal"
import ProfileCircle from "../profileCircle"
import "./style.css"
import { useState } from "react"

//likes are currently hardcoded. needs to be added on server side?
const Post = ({ name, date, content, comments = ["1", "2"], likes }) => {
    const { openModal, setModal } = useModal()
    const userInitials = name.match(/\b(\w)/g)

    const [isLiked, setIsLiked] = useState(false)

    const showModal = () => {
        setModal('Edit post', <EditPostModal />)
        openModal()
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
                    <p>{content}</p>
                </section>

                <section className={`post-interactions-container border-top ${comments.length ? 'border-bottom' : null}`}>
                    <div className="post-interactions">
                        {/* make appropriate click events: linked to liked API */}
                        <div className="onHover">
                            <button className={isLiked === true ? true : false}
                                onClick={() => {
                                    console.log("clicked Like!")
                                    setIsLiked(!isLiked)
                                    console.log("isLiked", isLiked)
                                }}>
                                <LikeIcon isLiked={isLiked}/>
                                <span>Like</span>
                            </button>
                        </div>
                        <div className="onHover">
                            <button className="postButton"

                                onClick={() => {
                                    console.log("clicked to comment!")
                                }}>
                                <CommentIcon />
                                <span>Comment</span>
                            </button>
                        </div>
                    </div>

                    <p>{!likes && 'Be the first to like this' || likes}</p>

                </section>

                <section>
                    {comments.map(comment => <Comment key={comment.id} name={comment.name} content={comment.content} />)}
                </section>
            </article>
        </Card >
    )
}

export default Post