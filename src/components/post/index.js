import useModal from "../../hooks/useModal"
import { useState, useEffect } from "react"
import Card from "../card"
import Comment from "../comment"
import EditPostModal from "../editPostModal"
import ProfileCircle from "../profileCircle"
import "./style.css"

const Post = ({ name, date, content, comments = [], id, likes = 0 }) => {
    const { openModal, setModal } = useModal()
    const [postContent, setContent] = useState(content)

    const userInitials = name.match(/\b(\w)/g)

    const showModal = () => {
        setModal('Edit post', <EditPostModal content={content} id={id} setContent={setContent}/>)
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
            </article>
        </Card>
    )
}

export default Post