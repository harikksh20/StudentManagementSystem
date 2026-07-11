import StudentForm from "../components/StudentForm";

function AddStudentPage({
    selectedStudent,
    setSelectedStudent,
    fetchStudents
}) {
    return (
        <StudentForm
            selectedStudent={selectedStudent}
            setSelectedStudent={setSelectedStudent}
            fetchStudents={fetchStudents}
        />
    );
}

export default AddStudentPage;