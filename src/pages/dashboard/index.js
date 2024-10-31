import { useState } from 'react';
import SearchIcon from '../../assets/icons/searchIcon';
import Button from '../../components/button';
import Card from '../../components/card';
import CreatePostModal from '../../components/createPostModal';
import TextInput from '../../components/form/textInput';
import Posts from '../../components/posts';
import useModal from '../../hooks/useModal';
import StudentSearchResults from './search';
import useAuth from '../../hooks/useAuth';
import './style.css';

const Dashboard = () => {
  const [searchVal, setSearchVal] = useState('');
  const { role } = useAuth();

  const onChange = (e) => {
    const value = e.target.value;
    setSearchVal(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(searchVal);
  };

  const { openModal, setModal } = useModal();

  const showModal = () => {
    setModal('Create a post', <CreatePostModal />);
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

        <Posts />
      </main>

      <aside>
        <Card>
          <form onSubmit={onSubmit}>
            <TextInput
              icon={<SearchIcon />}
              value={searchVal}
              name="Search"
              onChange={onChange}
              placeholder="Search for people"
            />
          </form>
        </Card>
        {role === 'teacher' ? (
          <p className="teacher-view-message">Teacher-specific view goes here</p>
        ) : (
          <StudentSearchResults searchVal={searchVal} />
        )}
        <Card>
          <h4>My Cohort</h4>
        </Card>
      </aside>
    </>
  );
};

export default Dashboard;
