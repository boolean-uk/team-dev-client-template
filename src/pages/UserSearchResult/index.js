import { NavLink } from "react-router-dom";
import BackArrowIcon from "../../assets/icons/backArrowIcon";
import "./usersearch.css"
import UserCard from "../../components/userCard";
import Card from "../../components/card";



const users = [
  { firstName: "Terry", lastName: "Buckley", title: "software developer" },
  { firstName: "Akindele", lastName: "Ayo", title: "frontend developer" },
  { firstName: "Faiza", lastName: "Khan", title: "full stack developer" },
  { firstName: "Lukas", lastName: "Dembicki", title: "web developer" },
  { firstName: "Eduard", lastName: "Bissell", title: "teacher/web developer" },
  { firstName: "Pierluigi", lastName: "Capirci", title: "full stack engineer" },
  { firstName: "Papi", lastName: "Nnorom", title: "full stack developer" },
  { firstName: "Lewis", lastName: "Lewis", title: "full stack developer" },


];


const UserSearchResult = () => {

  return (
  <div>
    <div className="user-search-result-container">
      <NavLink to="/">
        <BackArrowIcon
          width="48px"
          height="48px"
          top="308px"
          left="799px"
          color="#DCE1F0"
          icon="Arrow Back"
        
        />
      </NavLink>{" "}
      <p >Search results</p>
    </div>
     <div>
     {users.map((user, index) => (
      <Card key={index} boxShadow>
        <UserCard key={index} user={user} />

      </Card>
        ))}
     </div>
     </div>

  );
};

export default UserSearchResult;
