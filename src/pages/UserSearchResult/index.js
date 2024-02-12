import { useState } from "react"
import { NavLink } from "react-router-dom"
import BackArrowIcon from "../../assets/icons/backArrowIcon"
import "./usersearch.css"

import UserSearchBar from "../../components/userSearchBar/UserSearchBar"

import Card from "../../components/card"
import UsersList from "../../components/usersList"

const users = [
  { firstName: "Terry", lastName: "Buckley", title: "software developer" },
  { firstName: "Akindele", lastName: "Ayo", title: "frontend developer" },
  { firstName: "Faiza", lastName: "Khan", title: "full stack developer" },
  { firstName: "Lukas", lastName: "Dembicki", title: "web developer" },
  { firstName: "Eduard", lastName: "Bissell", title: "teacher/web developer" },
  { firstName: "Pierluigi", lastName: "Capirci", title: "full stack engineer" },
  { firstName: "Papi", lastName: "Nnorom", title: "full stack developer" },
]

const UserSearchResult = () => {
  const [searchVal, setSearchVal] = useState("")
  const [searchResults, setSearchResults] = useState([])
  return (
    <div className="user-search-result-container">
      <div className="user-result">
        <NavLink to="/">
          <BackArrowIcon
            width="48px"
            height="48px"
            top="308px"
            left="799px"
            icon="Arrow Back"
          />
        </NavLink>{" "}
        <p className="search-results-text">Search results</p>
      </div>
      <div className="people-lists">
        <UserSearchBar searchVal={searchVal} setSearchVal={setSearchVal} />
        <Card boxShadow>
          <p>people</p>

          <hr
            style={{
              width: "100%",
              borderTop: "1px solid #64648c",
              margin: "10px 0",
            }}
          />
          <UsersList users={searchResults} />
        </Card>
      </div>
    </div>
  )
}

export default UserSearchResult
