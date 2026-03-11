type StudentListProps = {
  students: string[];
};

function StudentList({ students }: StudentListProps) {
  return (
    <ul className="student-list">
      
      {students.map((student, index) => (
        <li key={index}>{student}</li>
      ))}
    </ul>
  );
}

export default StudentList;