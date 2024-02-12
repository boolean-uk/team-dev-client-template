import { useState } from "react";
import Card from "../card";
import TextInput from "../form/textInput";
import SearchIcon from "../../assets/icons/searchIcon";
import { getUserByName } from "../../service/apiClient";
import Menu from "../menu";
import UsersList from "../usersList";
import "./style.css";
import Button from "../button";

import { NavLink } from "react-router-dom";

function makeUsers(amount) {
  const users = []
  for (let i = 0; i < amount; i++) {
    users.push({firstName: "Joe", lastName: "Bloggs"})
  }
  return users
}

const SearchUserAside = () => {
  const [hasFocus, setHasFocus] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [users, setUsers] = useState(makeUsers(0));

  const menuOpen = hasFocus || searchVal.length > 0;

  const onChange = (e) => {
    setSearchVal(e.target.value);
  };

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
          <TextInput
            icon={<SearchIcon />}
            value={searchVal}
            name="Search"
            onChange={onChange}
          />
        </form>
      </Card>
      {menuOpen && <UserResults users={users} />}
    </div>
  );
};

const UserResults = ({ users, setResultsHasFocus }) => {
  // TODO: results should be same width as search bar
  // TODO: add bottom button area which changes depending on length of userListResults

  return (
    <>
      <Menu className={"search-user-menu"}>
        <h4 className="border-bottom spacing">People</h4>
        <UsersList users={users} />
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
      <p>Sorry, no results found.</p>
      <p>Try changing your search term.</p>
      <NavLink to="/results">
        <Button classes="button  offwhite  spacing" text={"Edit Search"} />
      </NavLink>
    </>
  );
};

export default SearchUserAside;
