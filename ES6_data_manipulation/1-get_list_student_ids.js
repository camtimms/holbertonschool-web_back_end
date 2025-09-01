export default function getListStudentIds(studentList) {
  // Check student list is a array
  if (!Array.isArray(studentList)) {
    return [];
  }

  // Use .map to extract the id elements from studentList
  let ids = studentList.map(studentIds => studentIds.id);

  return ids
}