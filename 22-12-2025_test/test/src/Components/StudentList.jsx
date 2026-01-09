function StudentList() {
  const students = ["Arya", "Rahul", "Aisha", "Kiran"];

  return (
    <>
    <ul type="none">
      {students.map((student, index) => (
        <li key={index}>{student}</li>
      ))}
    </ul>
    </>
  );
}

export default StudentList;
 