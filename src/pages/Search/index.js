import { useState, useEffect } from "react";
import Card from "../../components/card";
import TextInput from "../../components/form/textInput";
import SearchIcon from "../../assets/icons/searchIcon";
import PersonCard from "../../components/personCard/PersonCard";
import { get } from "../../service/apiClient"
import useAuth from "../../hooks/useAuth"
import "./style.css";

const Search = () => {
  const [searchVal, setSearchVal] = useState('')
  const [people, setPeople] = useState(null)
  const [isPeopleFound, setIsPeopleFound] = useState(null)
  const [isTeacher, setIsTeacher] = useState(null)
  const { loggedInUserInfo } = useAuth()

  useEffect(() => {
    setIsTeacher(loggedInUserInfo.role === 'TEACHER')
  },[])

  const handleChange = (e) => {
    const value = e.target.value
    setSearchVal(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchVal) {
      const inputArray = searchVal.trim().split(' ')
      getSearchResults(inputArray)
    } 
  }

  const getSearchResults = async (inputArray) => {
    let res = null
    switch (inputArray.length) {

      case 1:
        const first = await get(`users?firstName=${inputArray[0]}`).then(res=>res.data.users)
        const last = await get(`users?lastName=${inputArray[0]}`).then(res=>res.data.users)
        res = [...first, ...last]
        break

      case 2: 
        res = await get(`users?firstName=${inputArray[0]}&lastName=${inputArray[1]}`).then(res=>res.data.users)
        break

      default : console.log('invalid search query')
    }

    if (res.length > 0) {
      setIsPeopleFound(true)
      setPeople(res)
    } else {
      setIsPeopleFound(false)
    }
    
  }

  return (
    <>
      <main className="search">
        <Card>
          <form onSubmit={handleSubmit}>
            <TextInput icon={<SearchIcon />} value={searchVal} name="Search" onChange={handleChange}/>
          </form>
        </Card>
        <Card>
          <p className="people border-bottom">People</p>
          <ul>
            {people?.map((person, index) => {
              return (
                <PersonCard key={index} person={person} isTeacher={isTeacher}/>
              )
            })}
            {isPeopleFound === false && <p className="nofound text-blue1">No users found</p>}
          </ul>
        </Card>
      </main>
    </>
  );
};
export default Search;
