export default function updateStudentGradeByCity(studentList, city, newGrades) {
  // Filter by city
  const students_by_city = studentList.filter(student => student.location === city);

  // Map each student to their grade
  const updated_students = students_by_city.map(student => {
    // find the correct grade or the student based on their id
    const gradeObj = newGrades.find(grade => grade.studentId === student.id);

    // Create new student object and replace the old one now with their grade
    // ? = Add grade as 'N/A' if not found/undefined
    return {...student, grade: gradeObj ? gradeObj.grade : 'N/A'}
    });

  return updated_students;
}