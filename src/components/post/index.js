import useModal from "../../hooks/useModal"
import Card from "../card"
import Comment from "../comment"
import OptionsIcon from "../optionsIcon"
import EditPostModal from "../editPostModal"
import ProfileCircle from "../profileCircle"
import { useState, useEffect } from "react"
import { toggleLike } from "../../service/apiClient"
import "./style.css"

import emptyHeart from "../../assets/icons/empty-heart.png"
import heart from "../../assets/icons/heart.png"
import emptyComment from "../../assets/icons/empty-comment.png"
import comment from "../../assets/icons/comment.png"
import CommentInput from "../commentInput"
import useAuth from "../../hooks/useAuth"

const Post = ({
  postId,
  name,
  date,
  content,
  comments = [],
  likes,
  getAllPosts,
}) => {
  const { openModal, setModal } = useModal()
  const [postContent, setPostContent] = useState(null)
  const [userLiked, setUserLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(likes.length)
  const [isComment, setIsComment] = useState(false)

  const [formatDate, setFormatDate] = useState(null)

  const userInitials = name.match(/\b(\w)/g)

  const { userId } = useAuth()

  const showModal = () => {
    setModal(
      "Edit post",
      <EditPostModal
        postId={postId}
        getAllPosts={getAllPosts}
        setPostContent={setPostContent}
      />
    )
    openModal()
  }

  const likeHandler = async () => {
    try {
      await toggleLike(postId)
      setUserLiked(!userLiked)
      setLikesCount(userLiked ? likesCount - 1 : likesCount + 1)
    } catch (error) {
      console.error("Error toggling like:", error)
    }
  }

  useEffect(() => {
    const isUserLiked = likes.find(
      (like) => Number(like.userId) === Number(userId)
    )

    setUserLiked(!!isUserLiked)
    setLikesCount(likes.length)
  }, [likes, userId])

  useEffect(() => {
    const newDate = new Date(date)
    const day = newDate.getDate()
    const month = newDate.toLocaleString("en-GB", { month: "long" })
    const time = newDate.toLocaleTimeString().slice(0, 5)

    setFormatDate(`${day} ${month} at ${time}`)
  }, [date])

  useEffect(() => setPostContent(content), [content])

  const commentHandler = () => {
    setIsComment(!isComment)
  }

  return (
    <Card>
      <article className="post">
        <section className="post-details">
          <ProfileCircle initials={userInitials} />

          <div className="post-user-name">
            <p>{name}</p>
            <small>{formatDate}</small>
          </div>
          <OptionsIcon showModel={showModal} />
        </section>

        <section className="post-content">
          <p>{postContent}</p>
        </section>

        <section className="post-interactions-container border-top">
          <div className="post-interactions">
            <div className="heart-icon icon" onClick={likeHandler}>
              <img src={userLiked ? heart : emptyHeart} alt="heart" />
              <span>Like</span>
            </div>
            <div
              className={`comment-icon${isComment && "--active"} icon`}
              onClick={commentHandler}
            >
              <img src={isComment ? comment : emptyComment} alt="comment" />
              <span>Comment</span>
            </div>
          </div>

          {likesCount > 0 ? (
            <p>
              {likesCount} {likesCount === 1 ? "like" : "likes"}
            </p>
          ) : (
            <p>Be the first to like this</p>
          )}
        </section>

        <section className={`comments ${comments.length > 0 && "border-top"}`}>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              name={comment.name}
              content={comment.content}
            />
          ))}
        </section>

        <CommentInput postId={postId} getAllPosts={getAllPosts} />
      </article>
    </Card>
  )
}

export default Post
