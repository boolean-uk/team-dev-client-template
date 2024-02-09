import { useState, useEffect } from "react";
import Button from "../../components/button";
import Card from "../../components/card";
import CreatePostModal from "../../components/createPostModal";
import Posts from "../../components/posts";
import useModal from "../../hooks/useModal";
import "./style.css";
import { getPosts, getUsers } from "../../service/apiClient";
import UsersList from "../../components/usersList";
import UserSearchBar from "../../components/userSearchBar/UserSearchBar";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const sortPosts = (fetchedPosts) =>  {
    const sortedPosts = fetchedPosts.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    );
    return sortedPosts
  }

  const getAllPosts = () => {
    getPosts().then(sortPosts).then(setPosts).catch((error) => {
      console.error("Fetch error:", error.message);
    });
  };
  
  const getAllUsers = () => {
    getUsers().then(setUsers)
  }

  useEffect(getAllPosts, []);
  useEffect(getAllUsers, [])


  // Use the useModal hook to get the openModal and setModal functions
  const { openModal, setModal } = useModal();

  // Create a function to run on user interaction
  const showModal = () => {
    // Use setModal to set the header of the modal and the component the modal should render
    setModal("Create a post", <CreatePostModal getAllPosts={getAllPosts} />); // CreatePostModal is just a standard React component, nothing special

    // Open the modal!
    openModal();
  };
  
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
        <UserSearchBar />
        <Card>
          <h4>My Cohort</h4>
          <UsersList users={users} />
        </Card>
      </aside>
    </>
  );
};

export default Dashboard;
