import Card from "../card"
import TextInput from "../form/textInput"
import SearchIcon from "../../assets/icons/searchIcon"
import { useEffect, useState } from "react"
import { getUserByName } from "../../service/apiClient"

const UserSearchBar = () => {
  const [searchVal, setSearchVal] = useState("")
  // eslint-disable-next-line no-unused-vars
  const [searchResults, setSearchResults] = useState([])

  const onChange = (e) => {
    setSearchVal(e.target.value)
  }

  const getUsers = () => {
    getUserByName(searchVal).then(setSearchResults)
  }

  useEffect(getUsers, [searchVal])

  return (
    <>
      <Card>
        <form>
          <TextInput
            icon={<SearchIcon />}
            value={searchVal}
            name="Search"
            onChange={onChange}
          />
        </form>
      </Card>
    </>
  )
}

export default UserSearchBar
