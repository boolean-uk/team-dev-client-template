import EllipsisIcon from '../../assets/icons/ellipsisIcon'
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SearchIcon from '../../assets/icons/searchIcon';
import ArrowLeftIcon from '../../assets/icons/arrowLeftIcon';
import ProfileCircle from '../../components/profileCircle';
import Header from '../../components/header';
import Navigation from '../../components/navigation';
import Card from '../../components/card';
import { getUsers } from '../../service/apiClient';
import './style.css';

const AllSearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { results: initialResults, searchVal: initialSearchVal } = location.state || { results: [], searchVal: '' };
  const [searchVal, setSearchVal] = useState(initialSearchVal);
  const [results, setResults] = useState(initialResults);
  const [cohorts, setCohorts] = useState([]);
//   const [isStudentModalVisible, setIsStudentModalVisible] = useState(false);
//   const [selectedProfileId, setSelectedProfileId] = useState(null);
//   const menuRef = useRef(null);

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

  const onClickStudent = (id) => {
    setSelectedProfileId(id);
    setIsStudentModalVisible(true);
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
                            <ArrowLeftIcon onClick={() => navigate('/')} />              
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
                            {results.length === 0 ? (
                                <p>No results found.</p>
                            ) : (
                                <ul className='search-results-list'>
                                {results.map((cohort) => (
                                    <li key={cohort.id} className="found-user-card">
                                    <ProfileCircle
                                        initials={[
                                        cohort.firstName?.split(' ')[0],
                                        cohort.lastName?.split(' ')[0],
                                        ]}
                                        hasCascadingMenu={false}
                                    />

                                    {/* {isStudentModalVisible && selectedProfileId === cohort.id && (
                                        <Menu className="profile-circle-menu" ref={menuRef}>
                                        <MenuItem icon={<ProfileIcon />} text="Profile" />
                                        </Menu>
                                    )} */}

                                    <div className='found-user-details'>
                                        <span>{`${cohort.firstName} ${cohort.lastName}`}</span>
                                        <p>Software Developer</p>
                                    </div>

                                    <div>
                                        <p>Profile</p>
                                    </div>    


                                    <figure className='link-to-profile' onClick={() => onClickStudent(cohort.id)}>
                                        <EllipsisIcon classNam />
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

