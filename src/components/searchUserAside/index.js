import { useState } from "react";
import Card from "../card";
import TextInput from "../form/textInput";
import SearchIcon from "../../assets/icons/searchIcon";
import { getUserByName } from "../../service/apiClient";
import Menu from "../menu";
import UsersList from "../usersList";
import "./style.css";
import Button from "../button";


import { user } from "../../service/mockData";


const SearchUserAside = () => {
  const [hasFocus, setHasFocus] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [users, setUsers] = useState(user.user);

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
      <UserResults users={users} />

    </div>
  );
};

const UserResults = ({ users }) => {
  // TODO: need onFocus stuff for the results list

  // TODO: results should be same width as search bar
  // TODO: add bottom button area which changes depending on length of userListResults



  return (
    <>
      <Menu className={"search-user-menu"}>

        <h4 className="border-bottom spacing">People</h4>
        <UsersList users={users} />
        {users.length >= 10 &&
          <Button classes='button  offwhite  spacing' text={'All Results'} />
        }
      </Menu>

    </>
  );
};

export default SearchUserAside;
