import { useState, useEffect } from 'react';
import { getUsers } from '../../service/apiClient';
import UserListItem from '../userListItem';
import './style.css';

const SearchList = () => {
  const [users, setUsers] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  // Needs to collect right data
  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <article className="search-list">
      <section className="search-list-header border-bottom">
        <p>People</p>
      </section>
      <section className="search-list-results">
        {users.length > 0 &&
          users.length < 9 &&
          users.slice(0, isExpanded ? users.length : 3).map((user) => (
            // Need to update to right component
            <UserListItem user={user} key={user.id} />
          ))}

        {users.length > 0 && users.length < 9 && (
          <button className="" onClick={toggleExpand}>
            {isExpanded ? 'See less results' : 'All results'}
          </button>
        )}

        {users.length === 0 && (
          <div>
            <p>Sorry, no results found</p>
            <p>Try changing your search term</p>
            {/* Must add button functionality  */}
            <button>Edit search</button>
          </div>
        )}
      </section>
    </article>
  );
};

export default SearchList;
