import CohortList from "../../components/teacherDash/CohortList"
import StudentList from "../../components/teacherDash/StudentList"
import TeacherList from "../../components/teacherDash/TeacherList"
import Card from "../../components/card"

const TeacherAside = ({user}) => {

    return (
        <>
            <Card>
                <h4>Cohorts</h4>
                <CohortList user={user}/>
            </Card>

            <Card>
                <h4>Students</h4>
                <StudentList />
            </Card>

            <Card>
                <h4>Teachers</h4>
                <TeacherList />
            </Card>
        </>
    )
}

export default TeacherAside