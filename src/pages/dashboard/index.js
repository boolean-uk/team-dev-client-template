import { useState, useEffect } from "react"
import Button from "../../components/button"
import Card from "../../components/card"
import CreatePostModal from "../../components/createPostModal"
import Posts from "../../components/posts"
import useModal from "../../hooks/useModal"
import "./style.css"
import { getPosts, getUsers } from "../../service/apiClient"
import UsersList from "../../components/usersList"
import SearchUserAside from "../../components/searchUserAside"
import { useTranslation } from "react-i18next"

const Dashboard = () => {
  const {t} = useTranslation()

  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  const sortPosts = (fetchedPosts) => {
    const sortedPosts = fetchedPosts.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    )
    return sortedPosts
  }

  const getAllPosts = () => {
    getPosts()
      .then(sortPosts)
      .then(setPosts)
      .catch((error) => {
        console.error("Error get all posts sorted:", error.message)
      })
  }

  const getAllUsers = () => {
    getUsers().then(setUsers)
  }

  useEffect(getAllPosts, [])
  useEffect(getAllUsers, [])


  const { openModal, setModal } = useModal()

  const showModal = () => {
    setModal(`${t('createAPost')}`, <CreatePostModal getAllPosts={getAllPosts} />)

    openModal()
  }

  return (
    <>
      <main>
        <Card>
          <div className="create-post-input">
            <div className="profile-icon">
              <p>AJ</p>
            </div>
            <Button text={t('whatsOnYourMind')} onClick={showModal} />
          </div>
        </Card>

        <Posts posts={posts} getAllPosts={getAllPosts} />
      </main>
      <aside>
        <SearchUserAside />
        <Card>
          <h4>{t('myCohort')}</h4>
          <UsersList users={users} />
        </Card>
      </aside>
    </>
  )
}

export default Dashboard
