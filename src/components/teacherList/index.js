import TeacherCard from "../teacherCard"

const TeacherList = ({ teachers }) => {
  return teachers.map((teacher, index) => (
    <TeacherCard key={`teacherCard${index}`} teacher={teacher} />
  ))
}

export default TeacherList
