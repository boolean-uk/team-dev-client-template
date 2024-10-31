import { useEffect, useState } from 'react';
import SearchIcon from '../../assets/icons/searchIcon';
import Button from '../../components/button';
import Card from '../../components/card';
import CreatePostModal from '../../components/createPostModal';
import TextInput from '../../components/form/textInput';
import Posts from '../../components/posts';
import useModal from '../../hooks/useModal';
import SearchResults from './search';
import './style.css';

const Dashboard = () => {
  const profiles = [
    {
      id: 1,
      userId: 1,
      firstName: 'John',
      lastName: 'Doe',
      specialism: 'Full-stack developer',
      githubUrl: 'https://github.com/johndoe'
    },
    {
      id: 2,
      userId: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      specialism: 'Frontend engineer',
      githubUrl: 'https://github.com/janesmith'
    },
    {
      id: 3,
      userId: 3,
      firstName: 'Michael',
      lastName: 'Johnson',
      specialism: 'Backend developer',
      githubUrl: 'https://github.com/michaeljohnson'
    },
    {
      id: 4,
      userId: 4,
      firstName: 'Emily',
      lastName: 'Davis',
      specialism: 'DevOps engineer',
      githubUrl: 'https://github.com/emilydavis'
    },
    {
      id: 5,
      userId: 5,
      firstName: 'Chris',
      lastName: 'Brown',
      specialism: 'Data scientist',
      githubUrl: 'https://github.com/chrisbrown'
    },
    {
      id: 6,
      userId: 6,
      firstName: 'Sophia',
      lastName: 'Wilson',
      specialism: 'UI/UX designer',
      githubUrl: 'https://github.com/sophiawilson'
    },
    {
      id: 7,
      userId: 7,
      firstName: 'Daniel',
      lastName: 'Martinez',
      specialism: 'Software engineer',
      githubUrl: 'https://github.com/danielmartinez'
    },
    {
      id: 8,
      userId: 8,
      firstName: 'Olivia',
      lastName: 'Garcia',
      specialism: 'Product manager',
      githubUrl: 'https://github.com/oliviagarcia'
    },
    {
      id: 9,
      userId: 9,
      firstName: 'Liam',
      lastName: 'Taylor',
      specialism: 'Security analyst',
      githubUrl: 'https://github.com/liamtaylor'
    },
    {
      id: 10,
      userId: 10,
      firstName: 'Emma',
      lastName: 'Andersson',
      specialism: 'Backend developer',
      githubUrl: 'https://github.com/emmaanderson'
    }
  ];

  const [searchVal, setSearchVal] = useState('');
  const [searchUsers, setSearchUsers] = useState([]);

  useEffect(() => {
    setSearchUsers(profiles); // Save all users for filtering
  }, []);

  const onChange = (e) => {
    const value = e.target.value;
    setSearchVal(value);

    // Filter users based on search value using firstName and lastName
    if (value) {
      const filteredUsers = profiles.filter((user) =>
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(value.toLowerCase())
      );
      setSearchUsers(filteredUsers);
    } else {
      setSearchUsers([]); // Clear search results if input is empty
    }
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

        <SearchResults searchUsers={searchUsers} />

        <Card>
          <h4>My Cohort</h4>
        </Card>
      </aside>
    </>
  );
};

export default Dashboard;
