import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ProfileCircle from '../../components/profileCircle';
import SearchIcon from '../../assets/icons/searchIcon';
import TextInput from '../../components/form/textInput';
import Card from '../../components/card';
import ArrowLeftIcon from '../../assets/icons/arrowLeftIcon';
import './style.css';

const Search = () => {
  const { searchQuery } = useParams();
  const [searchVal, setSearchVal] = useState(searchQuery);
  const [searchUsers, setSearchUsers] = useState([]);
  const navigate = useNavigate();

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

  useEffect(() => {
    if (searchQuery) {
      const filteredUsers = profiles.filter((user) =>
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchUsers(filteredUsers);
    }
  }, [searchQuery]);

  const onSearch = (e) => {
    e.preventDefault();
    navigate(`/dashboard/search/${searchVal}`);
  };

  const onChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchVal(value);
  };

  const handleBackToDashboard = () => {
    navigate('/');
  };

  return (
    <main>
      <div className="search-results-page">
        <div className="search-results-header-container">
          <button className="back-button" onClick={handleBackToDashboard}>
            <ArrowLeftIcon />
          </button>
          <h2 className="search-results-header">Search Results</h2>
        </div>

        <Card>
          <form onSubmit={onSearch}>
            <TextInput
              icon={<SearchIcon />}
              value={searchVal}
              onChange={onChange}
              name="Search"
              placeholder="Search for people"
            />
          </form>
        </Card>
        <Card>
          <p>People</p>
          <hr className="search-results-line" />
          {searchUsers.length > 0 && searchQuery !== undefined ? (
            <div className="search-results-list">
              {searchUsers.map((user) => (
                <div key={user.id} className="search-user">
                  <div className="profile-circle-container">
                    <ProfileCircle initials={`${user.firstName[0]}${user.lastName[0]}`} />
                  </div>
                  <div className="user-details">
                    <p className="user-name">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="user-specialism">{user.specialism}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="no-results-message">
              Sorry, no results found
              <br />
              Try changing your search term
            </p>
          )}
        </Card>
      </div>
    </main>
  );
};

export default Search;
