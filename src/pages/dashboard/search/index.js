import ProfileCircle from '../../../components/profileCircle';
import './style.css';

const SearchResults = ({ searchUsers }) => {
  const hasResults = searchUsers.length > 0;
  const displayUsers = searchUsers.slice(0, 10); // Show up to 10 users

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
        <>
          <p className="no-results-message">
            Sorry, no results found
            <br />
            Try changing your search term
          </p>
          <button className="edit-search-button">Edit search</button>
        </>
      )}
    </div>
  );
};

export default SearchResults;
