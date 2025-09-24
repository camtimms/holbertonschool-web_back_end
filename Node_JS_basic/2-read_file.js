function countStudents(path) {
  const fs = require('node:fs');

  try {
    const data = fs.readFileSync(path, 'utf8');
    // Step 1: Split the file content into lines
    const lines = data.trim().split('\n');

    // Step 2: Get the headers from the first line
    const headers = lines[0].split(',');
    // headers = ['firstname', 'lastname', 'age', 'field']

    // Step 3: Get data rows (skip the header line)
    const dataRows = lines.slice(1);

    // Step 4: Parse each row into a student object
    const students = [];
    for (let i = 0; i < dataRows.length; i++) {
      const row = dataRows[i];
      const values = row.split(',');

      // Create a student object using headers as keys
      const student = {
        firstname: values[0],
        lastname: values[1],
        age: values[2],
        field: values[3]
      };

      students.push(student);
    }

    console.log(`Number of students: ${students.length}`);

    // Step 5: Count students by field
    const csStudents = [];
    const sweStudents = [];

    for (let i = 0; i < students.length; i++) {
      const student = students[i];

      if (student.field === 'CS') {
        csStudents.push(student.firstname);
      } else if (student.field === 'SWE') {
        sweStudents.push(student.firstname);
      }
    }

    // Step 6: Display results
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`)

  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents