import { useEffect, useState } from 'react'
import SearchIcon from '../../assets/icons/searchIcon'
import Button from '../../components/button'
import Card from '../../components/card'
import CreatePostModal from '../../components/createPostModal'
import TextInput from '../../components/form/textInput'
import Posts from '../../components/posts'
import useModal from '../../hooks/useModal'
import './style.css'
import { getPosts, getUserByName } from '../../service/apiClient'

const Dashboard = () => {
  const [searchVal, setSearchVal] = useState('')
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  const getAllPosts = () => {
    getPosts().then(setPosts)
  }

  useEffect(getAllPosts, [])

  const onChange = (e) => {
    setSearchVal(e.target.value)
  }

  const onSubmit = (e) => {
    e && e.preventDefault()
    try {
      getUserByName(searchVal).then(setUsers)
    } catch (e) {
      throw new Error(`no users named ${searchVal} were found`)
    }
  }

  // Use the useModal hook to get the openModal and setModal functions
  const { openModal, setModal } = useModal()

  // Create a function to run on user interaction
  const showModal = () => {
    // Use setModal to set the header of the modal and the component the modal should render
    setModal('Create a post', <CreatePostModal getAllPosts={getAllPosts} />) // CreatePostModal is just a standard React component, nothing special

    // Open the modal!
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
            <Button text="What's on your mind?" onClick={showModal} />
          </div>
        </Card>

        <Posts posts={posts} />
      </main>
      <aside>
        <Card>
          <form onSubmit={onSubmit}>
            <TextInput
              icon={<SearchIcon />}
              value={searchVal}
              name="Search"
              onChange={onChange}
            />
          </form>
        </Card>
        <Card>
          <h4>My Cohort</h4>
          <UserList users={users} />
        </Card>
      </aside>
    </>
  )
}

export default Dashboard
