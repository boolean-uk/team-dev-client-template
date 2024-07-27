import {useLocation, Link, NavLink } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import useUser from '../../hooks/useUser';
import EllipsisIcon from '../../assets/icons/ellipsisIcon'
import SearchIcon from '../../assets/icons/searchIcon';
import ArrowLeftIcon from '../../assets/icons/arrowLeftIcon';
import ProfileCircle from '../../components/profileCircle';
import Header from '../../components/header';
import Navigation from '../../components/navigation';
import Card from '../../components/card';
import ProfileIcon from '../../assets/icons/profileIcon'
import Menu from '../../components/menu'
import MenuItem from '../../components/menu/menuItem'
import { getUsers } from '../../service/apiClient';
import './style.css';

const AllSearchResults = () => {
  const location = useLocation();
  const menuRef = useRef(null)
  const {currentUser} = useUser()
  const { results: initialResults, searchVal: initialSearchVal } = location.state || { results: [], searchVal: '' };
  const [searchVal, setSearchVal] = useState(initialSearchVal);
  const [results, setResults] = useState(initialResults);
  const [selectedProfileId, setSelectedProfileId] = useState(null)
  
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
  
  const getInitials = (firstName, lastName) => {
    const firstInitial = firstName ? firstName.charAt(0).toUpperCase() : '';
    const secondInitial = lastName ? lastName.charAt(0).toUpperCase() : '';
    return [firstInitial, secondInitial]
  };

  const handleClickOutside = (event) => {
  if (menuRef.current && !menuRef.current.contains(event.target) && !event.target.closest('.link-to-profile')) {
    setSelectedProfileId(null);
  }
};

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])
  
  const onClickStudentMenu = (id) => {
    setSelectedProfileId(prevId => prevId === id ? null : id);
    console.log(id);
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
                        <li key={user.id} className={`found-user-card ${
                        currentUser.role === 'TEACHER' ? 'found-user-card-tchr' : 'found-user-card-stdnt'
                        }`}>
                          <ProfileCircle
                              initials={getInitials(user.firstName, user.lastName)}
                              hasCascadingMenu={false}
                          />

                          <div className='found-user-details'>
                              <span>{`${user.firstName} ${user.lastName}`}</span>
                              <p>Software Developer</p>
                          </div>
                          <div className='found-user-profile-link'>
                              <p>Profile</p>
                          </div>                          
                        
                          {selectedProfileId === user.id && (
                            <Menu className="profile-circle-menu" ref={menuRef}>
                              <MenuItem icon={<ProfileIcon />} text="Profile" />
                            </Menu>
                          )}
                        
                          {currentUser.role === 'TEACHER' && (
                            <div className='teacher-links'>
                              <NavLink to='/'><span>Add Note</span></NavLink>
                              <NavLink to='/'><span>Move to Cohort</span></NavLink>
                            </div>
                          )}
                      
                          <figure className='link-to-profile'
                            onClick={() => onClickStudentMenu(user.id)}>
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

export default AllSearchResults;
