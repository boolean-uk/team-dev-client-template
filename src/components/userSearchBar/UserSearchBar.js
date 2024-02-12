import TextInput from "../form/textInput"
import SearchIcon from "../../assets/icons/searchIcon"

const UserSearchBar = ({searchVal, setSearchVal}) => {
  const onChange = (e) => {
    setSearchVal(e.target.value)
  }

  return (
    <>
      <form>
        <TextInput
          icon={<SearchIcon />}
          value={searchVal}
          name="Search"
          onChange={onChange}
        />
      </form>
    </>
  )
}

export default UserSearchBar
