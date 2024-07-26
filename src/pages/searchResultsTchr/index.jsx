import EllipsisIcon from '../../assets/icons/ellipsisIcon'
import { useState, useEffect, useRef } from 'react';
import {useLocation, Link } from 'react-router-dom';
import SearchIcon from '../../assets/icons/searchIcon';
import ArrowLeftIcon from '../../assets/icons/arrowLeftIcon';
import ProfileCircle from '../../components/profileCircle';
import Header from '../../components/header';
import Navigation from '../../components/navigation';
import Card from '../../components/card';
import { getUsers } from '../../service/apiClient';
import './style.css';

const SearchResultsStdnt = () => {
  const location = useLocation();
  const { results: initialResults, searchVal: initialSearchVal } = location.state || { results: [], searchVal: '' };
  const [searchVal, setSearchVal] = useState(initialSearchVal);
  const [results, setResults] = useState(initialResults);

  useEffect(() => {
      getUsers()
      window.scrollTo(0, 0);
  }, []);

  const onChange = async (e) => {
    const searchValue = e.target.value;
    setSearchVal(searchValue);

    try {
      const allUsers = await getUsers();
      const filteredResults = allUsers.filter((user) => {
        if (user.firstName && user.lastName) {
          const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
          return fullName.includes(searchValue.toLowerCase());
        }
        return false;
      });
      setResults(filteredResults);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const onClickStudent = (id) => {
    setSelectedProfileId(id);
    setIsStudentModalVisible(true);
  };

  const getInitials = (firstName, lastName) => {
    const firstInitial = firstName ? firstName.charAt(0).toUpperCase() : '';
    const secondInitial = lastName ? lastName.charAt(0).toUpperCase() : '';
    return [firstInitial, secondInitial]
  };

  return (
      <>
        <div className='container'>              
            <Header />
            <Navigation className="left-bar" />
            <main className='search-results-container'>
                <div>
                    <div className='top'>
                          <div className='title'>
                              <Link to='/'>
                                <ArrowLeftIcon />              
                              </Link>
                            <h2>Search results</h2>      
                        </div>
                        <div className='search-bar-container'>
                            <Card name="search-bar">
                                <div className='search-page-search-bar'>
                                    <SearchIcon />
                                    <input className="search-page-input"
                                    type="search"
                                    name="Search"
                                    value={searchVal}
                                    onChange={onChange}
                                    placeholder="Search for people"
                                    />
                                </div>
                            </Card>                              
                        </div>
                    </div>

                    <div className='search-results'>
                          <Card className='search-results-card' name="results">
                              {results.length === 0 && (
                                  <p>No results found.</p>
                              )} 
                              {results.length > 0 && (
                                <ul className='search-results-list'>
                                {results.map((user) => (
                                    <li key={user.id} className="found-user-card">
                                        <ProfileCircle
                                            initials={getInitials(user.firstName, user.lastName)}
                                            hasCascadingMenu={false}
                                        />

                                        <div className='found-user-details'>
                                            <span>{`${user.firstName} ${user.lastName}`}</span>
                                            <p>Software Developer</p>
                                        </div>

                                        <div>
                                            <p>Profile</p>
                                        </div>   

                                        <figure className='link-to-profile' onClick={() => onClickStudent(cohort.id)}>
                                            <EllipsisIcon />
                                        </figure>
                                    </li>
                                ))}
                                </ul>
                            )}
                        </Card>
                    </div>
                  </div>
              </main>
        </div>
    </>
  );
};

export default SearchResultsStdnt;
