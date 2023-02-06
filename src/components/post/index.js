import LikeIcon from "../../assets/icons/likeIcon"
import CommentIcon from "../../assets/icons/commentIcon"
import useModal from "../../hooks/useModal"
import Card from "../card"
import Comment from "../comment"
import EditPostModal from "../editPostModal"
import ProfileCircle from "../profileCircle"
import "./style.css"


// we might need to turn the "Like" and "Comment div into a button"


//likes are currently hardcoded. needs to be added on server side?
const Post = ({ name, date, content, comments = ["cool post"], likes = 0 }) => {
    const { openModal, setModal } = useModal()

    const userInitials = name.match(/\b(\w)/g)

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
                        {/* make clickable */}
                        <div className="onHover">
                            <button className="postButton" onClick={()=> {
                                console.log("clicked Like!")
                            }}>
                                <LikeIcon />
                                Like
                            </button>
                        </div>
                        <div className="onHover">
                            <button className="postButton"
                            onClick={()=> {
                                console.log("clicked to comment!")
                            }}>
                                <CommentIcon />
                                Comment
                            </button>
                        </div>
                    </div>

                    {/* <p>{likes}</p> */}
                    {/* long hand likes */}
                    <p>{!likes && 'Be the first to like this'}</p>

                </section>

                <section>
                    {comments.map(comment => <Comment key={comment.id} name={comment.name} content={comment.content} />)}
                </section>
            </article>
        </Card>
    )
}

export default Post