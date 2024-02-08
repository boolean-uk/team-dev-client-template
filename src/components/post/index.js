import useModal from '../../hooks/useModal'
import Card from '../card'
import Comment from '../comment'
import EditIcon from '../editIcon'
import EditPostModal from '../editPostModal'
import ProfileCircle from '../profileCircle'
import { useState } from 'react'
import './style.css'

import emptyHeart from '../../assets/icons/empty-heart.png'
import heart from '../../assets/icons/heart.png'

const Post = ({ name, date, content, comments = [], likes = 0 }) => {
  const { openModal, setModal } = useModal()
  const [isLike, setIsLike] = useState(false)

  const userInitials = name.match(/\b(\w)/g)

  const showModal = () => {
    setModal('Edit post', <EditPostModal />)
    openModal()
  }

  const likeHandler = () => {
    setIsLike(!isLike)
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
          <EditIcon showModel={showModal} />
        </section>

        <section className="post-content">
          <p>{content}</p>
        </section>

        <section
          className={`post-interactions-container border-top ${
            comments.length ? 'border-bottom' : null
          }`}
        >
          <div className="post-interactions">
            <div className="heart-icon" onClick={likeHandler}>
              {isLike ? (
                <img src={heart} alt="heart" />
              ) : (
                <img src={emptyHeart} alt="heart" />
              )}
              <span>Like</span>
            </div>
            <div>Comment</div>
          </div>

          <p>{!likes && 'Be the first to like this'}</p>
        </section>

        <section>
          {comments.map((comment) => (
            <Comment
              key={comment.id}
              name={comment.name}
              content={comment.content}
            />
          ))}
        </section>
      </article>
    </Card>
  )
}

export default Post
