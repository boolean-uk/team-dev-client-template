import React from "react"
import { NavLink } from "react-router-dom"
import BackArrowIcon from "../../assets/icons/backArrowIcon"
import "./usersearch.css"
import UserCard from "../../components/userCard"
import Card from "../../components/card"

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
        <p>people</p>

        <hr
          style={{
            width: "100%",
            borderTop: "1px solid #64648c",
            margin: "10px 0",
          }}
        />
        {users.map((user, index) => (
          <Card key={index} boxShadow>
            <UserCard key={index} user={user} />
          </Card>
        ))}
      </div>
    </div>
  )
}

export default UserSearchResult
