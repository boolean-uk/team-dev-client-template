import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"

import Button from "../button"
import Card from "../card"
import Menu from "../menu"
import UsersList from "../usersList"
import UserSearchBar from "../userSearchBar/UserSearchBar"

import { getUserByName } from "../../service/apiClient"
import { useTranslation } from "react-i18next"

import "./style.css"
import { t } from "i18next"

const SearchUserAside = () => {
  const [hasFocus, setHasFocus] = useState(false)
  const [menuHover, setMenuHover] = useState(false)
  const [searchVal, setSearchVal] = useState("")
  const [users, setUsers] = useState([])
  // eslint-disable-next-line no-unused-vars
  const { t } = useTranslation()

  const menuOpen = hasFocus || searchVal.length > 0 || menuHover

  const getUsers = () => {
    getUserByName(searchVal).then(setUsers)
  }

  useEffect(getUsers, [searchVal])

  return (
    <div className="relative">
      <Card>
        <form
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
        >
          <UserSearchBar searchVal={searchVal} setSearchVal={setSearchVal} />
        </form>
      </Card>
      {menuOpen && (
        <UserResults
          users={users}
          menuHover={menuHover}
          setMenuHover={setMenuHover}
        />
      )}
    </div>
  )
}

const UserResults = ({ users, setMenuHover }) => {
  if (!Array.isArray(users)) {
    users = []
  }
  
  return (
    <>
      <div
        onMouseEnter={() => setMenuHover(true)}
        onMouseLeave={() => setMenuHover(false)}
      >
        <Menu className={"search-user-menu"}>
          <p className="border-bottom spacing text-blue1">{t("people")}</p>
          <UsersList users={users.slice(0, 10)} />
          {users.length >= 10 && (
            <NavLink to="/results">
              <Button classes="button offwhite spacing" text={t("allResults")} />
            </NavLink>
          )}
          {users.length === 0 && <NoResults />}
        </Menu>
      </div>
    </>
  )
}

const NoResults = () => {
  return (
    <>
      <div className="spacing ">
        <p className="text-blue1 ">
          {t("noResultsFound")}
          <br />
          <br />
          
        {t("changeSearch")}
        </p>
      </div>
      <NavLink to="/results">
        <Button classes="button offwhite spacing" text={t("editSearch")} />
      </NavLink>
    </>
  )
}

export default SearchUserAside
