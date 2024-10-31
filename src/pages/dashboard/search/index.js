import ProfileCircle from '../../../components/profileCircle';
import { useState, useEffect } from 'react';
import './style.css';

const StudentSearchResults = ({ searchVal }) => {
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

  const [searchUsers, setSearchUsers] = useState([]);
  const hasResults = searchUsers.length > 0;
  const displayUsers = searchUsers.slice(0, 10); // Show up to 10 users

  useEffect(() => {
    if (searchVal.length > 0) {
      const filteredUsers = profiles.filter((user) =>
        `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchVal.toLowerCase())
      );
      setSearchUsers(filteredUsers);
    } else {
      setSearchUsers([]); // Clear search results if input is empty
    }
  }, [searchVal]); // Only runs when searchVal changes

  // Don't render anything if searchVal is empty
  if (!searchVal.trim()) {
    return null;
  }

  return (
    <div className="search-results">
      <p>People</p>
      <hr className="search-results-line" />

      {hasResults ? (
        <>
          {displayUsers.map((user) => (
            <div key={user.id} className="search-user">
              <div className="profile-circle-container">
                <ProfileCircle initials={`${user.firstName[0]}${user.lastName[0]}`} />
              </div>
              <div className="user-details">
                <p>
                  {user.firstName} {user.lastName}
                </p>
                <p>{user.specialism}</p>
              </div>
            </div>
          ))}
          {searchUsers.length > 10 && <button className="show-all-button">All results</button>}
        </>
      ) : (
        <p className="no-results-message">
          Sorry, no results found
          <br />
          Try changing your search term
        </p>
      )}
    </div>
  );
};

export default StudentSearchResults;
