import { useEffect, useState } from "react"
import MyExercises from "../../components/myCohortExercises"
import MyTeachers from "../../components/myCohortTeachers"
import MyCohortDetails from "../../components/myCohortDetails"
import { getUsers } from "../../service/apiClient"

const MyCohort = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then((users) => setUsers(users))
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
