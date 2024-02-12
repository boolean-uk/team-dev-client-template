import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

import Button from "../button"
import Card from "../card"
import Menu from "../menu"
import UsersList from "../usersList"
import UserSearchBar from "../userSearchBar/UserSearchBar"

import { getUserByName } from "../../service/apiClient"

import "./style.css"

const SearchUserAside = () => {
  const [hasFocus, setHasFocus] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [users, setUsers] = useState(makeUsers(0));

  const menuOpen = hasFocus || searchVal.length > 0;

  const getUsers = () => {
    getUserByName(searchVal).then(setUsers)
  }

  useEffect(getUsers, [searchVal])

  const onSubmit = (e) => {
    e && e.preventDefault();
    try {
      getUserByName(searchVal).then(setUsers);
    } catch (e) {
      console.log("error getting username", e);
    }
  };

  return (
    <div className="relative">
      <Card>
        <form
          onSubmit={onSubmit}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
        >
          <UserSearchBar searchVal={searchVal} setSearchVal={setSearchVal} />
        </form>
      </Card>
      {menuOpen && <UserResults users={users} />}
    </div>
  );
};

const UserResults = ({ users, setResultsHasFocus }) => {
  // TODO: results should be same width as search bar
  // TODO: add bottom button area which changes depending on length of userListResults
  console.log('users', users)
  return (
    <>
      <Menu className={"search-user-menu"}>
        <p className="border-bottom spacing  text-blue1">People</p>
        <UsersList users={users.slice(0, 10)} />
        {users.length >= 10 && (
          <NavLink to="/results">
            <Button classes="button  offwhite  spacing" text={"All Results"} />
          </NavLink>
        )}
        {users.length === 0 && <NoResults />}
      </Menu>
    </>
  );
};

const NoResults = () => {
  return (
    <>
      <div className="spacing ">
        <p className="text-blue1 ">Sorry, no results found.
          <br /><br />
          Try changing your search term.</p>
      </div>

      <NavLink to="/results">
        <Button classes="button  offwhite  spacing" text={"Edit Search"} />
      </NavLink>
    </>
  );
};

export default SearchUserAside;
