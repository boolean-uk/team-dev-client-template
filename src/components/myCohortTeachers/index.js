import UserCard from "../userCard";
import Card from "../card";
import "./style.css";

const MyTeachers = ({ users }) => {
  const teachers = users.filter((user) => user.role === "TEACHER");

  return (
    <Card>
      <h3 className="my-cohort-teachers--header">Teachers</h3>
      <ul className="my-cohort-teachers--list">
        {teachers.map((user, idx) => (
          <UserCard user={user} key={idx} />
        ))}
      </ul>
    </Card>
  );
};

export default MyTeachers;
