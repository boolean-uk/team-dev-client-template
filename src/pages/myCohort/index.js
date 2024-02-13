import { useEffect, useState } from "react"
import MyExercises from "../../components/myCohortExercises"
import MyTeachers from "../../components/myCohortTeachers"
import MyCohortDetails from "../../components/myCohortDetails"
import { getUsers, getSelf } from "../../service/apiClient"

const MyCohort = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then((users) => setUsers(users))
  }, [])

	useEffect(() => {
    getSelf()
		.then((self) => setUsers(users.filter((user) => {
			return user.cohort_id === self.cohort_id &&
			user.role === "STUDENT"
			})))
	}, [])

  return (
    <>
      <main>
        <MyCohortDetails users={users} />
      </main>

      <aside>
        <MyTeachers users={users} />
        <MyExercises />
      </aside>
    </>
  )
}

export default MyCohort
