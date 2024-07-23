import { useEffect, useState } from "react";
import SearchIcon from "../../assets/icons/searchIcon";
import Button from "../../components/button";
import Card from "../../components/card";
import CreatePostModal from "../../components/createPostModal";
import Posts from "../../components/posts";
import useModal from "../../hooks/useModal";
import "./style.css";
import { getUsers } from "../../service/apiClient";
import ProfileCircle from "../../components/profileCircle";
import EllipsisIcon from "../../assets/icons/ellipsisIcon";

const Dashboard = () => {
  const [searchVal, setSearchVal] = useState("");
  const [isSearchResVisible, setIsSearchResVisible] = useState(false);
  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    getUsers().then(setCohorts);
  }, []);

  const onClickSearchBar = () => {
    setIsSearchResVisible(true);
  };

  const onChange = (e) => {
    setSearchVal(e.target.value);
  };

  const result = cohorts.filter((cohort) =>
    cohort.firstName.toLowerCase().includes(searchVal.toLowerCase())
  );

  const handleClickOutside = (event) => {
    if (
      !event.target.closest(".search-cohorts-results") &&
      !event.target.closest("#input-wrapper-search-bar")
    ) {
      setIsSearchResVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Use the useModal hook to get the openModal and setModal functions
  const { openModal, setModal } = useModal();

  // Create a function to run on user interaction
  const showModal = () => {
    // Use setModal to set the header of the modal and the component the modal should render
    setModal("Create a post", <CreatePostModal />); // CreatePostModal is just a standard React component, nothing special

    // Open the modal!
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
          <form onSubmit={(e) => e.preventDefault()} onClick={onClickSearchBar}>
            <div id="input-wrapper-search-bar">
              <SearchIcon />

              <input
                type="search"
                name="Search"
                value={searchVal}
                onChange={onChange}
                placeholder="Search for people"
              />
            </div>
          </form>
        </Card>

        {isSearchResVisible && result.length === 0 && (
          <article className="search-cohorts-results">
            <p>People</p>

            <div className="divider-search-bar"></div>

            <p>Sorry, no results found.</p>

            <p>Try changing your search term.</p>

            <button>Edit search</button>
          </article>
        )}

        {isSearchResVisible && result.length >= 1 && (
          <article className="search-cohorts-results">
            <p>People</p>

            <div className="divider-search-bar"></div>

            {result.map((cohort) => (
              <div className="user-search-card" key={cohort.id}>
                <ProfileCircle
                  initials={
                    cohort.firstName[0].toUpperCase() +
                    cohort.lastName[0].toUpperCase()
                  }
                />

                <div>
                  <b>{`${cohort.firstName} ${cohort.lastName}`}</b>
                  <p>Software Developer</p>
                </div>

                <figure>
                  <EllipsisIcon />
                </figure>
              </div>
            ))}

            {result.length >= 10 && <button>All results</button>}
          </article>
        )}

        <Card>
          <h4>My Cohort</h4>
        </Card>
      </aside>
    </>
  );
};

export default Dashboard;
