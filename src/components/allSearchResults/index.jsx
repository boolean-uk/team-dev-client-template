import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import ProfileCircle from '../../components/profileCircle';
import SearchIcon from '../../assets/icons/searchIcon';
import ArrowLeftIcon from '../../assets/icons/arrowLeftIcon';
import { getUsers } from '../../service/apiClient';
// import './style.css';

const AllSearchResults = () => {
  const location = useLocation();
  const history = useHistory();
  const { results: initialResults, searchVal: initialSearchVal } = location.state || { results: [], searchVal: '' };
  const [searchVal, setSearchVal] = useState(initialSearchVal);
  const [results, setResults] = useState(initialResults);
  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    getUsers().then(setCohorts);
  }, []);

  const onChange = (e) => {
    setSearchVal(e.target.value);
    const filteredResults = cohorts.filter((cohort) => {
      if (cohort.firstName && cohort.lastName) {
        const fullName = `${cohort.firstName || ''} ${cohort.lastName || ''}`.toLowerCase();
        return fullName.includes(e.target.value.toLowerCase());
      }
      return false;
    });
    setResults(filteredResults);
  };

  return (
    <div className="all-results-page">
      <header className="all-results-header">
        <ArrowLeftIcon onClick={() => history.push('/')} />
        <h1>Search results</h1>
      </header>

      <div className="search-bar">
        <SearchIcon />
        <input
          type="search"
          value={searchVal}
          onChange={onChange}
          placeholder="Search for people"
        />
      </div>

      <div>
        <h2>Search Results for "{searchVal}"</h2>
        {results.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <ul>
            {results.map((cohort) => (
              <li key={cohort.id} className="user-search-card">
                <ProfileCircle
                  initials={[
                    cohort.firstName?.split(' ')[0],
                    cohort.lastName?.split(' ')[0],
                  ]}
                  hasCascadingMenu={false}
                />
                <div>
                  <span>{`${cohort.firstName} ${cohort.lastName}`}</span>
                  <p>Software Developer</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllSearchResults;
