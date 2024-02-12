import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import BackArrowIcon from "../../assets/icons/backArrowIcon"
import { getUserByName } from "../../service/apiClient"
import "./usersearch.css"

import UserSearchBar from "../../components/userSearchBar/UserSearchBar"

import Card from "../../components/card"
import UsersList from "../../components/usersList"

const UserSearchResult = () => {
  const [searchVal, setSearchVal] = useState("")
  const [searchResults, setSearchResults] = useState([])

  const getUsers = () => {
    getUserByName(searchVal).then(setSearchResults)
  }

  useEffect(getUsers, [searchVal])

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
