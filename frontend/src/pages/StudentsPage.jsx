import SearchBar from "../components/SearchBar";
import StudentTable from "../components/StudentTable";

function StudentsPage({
    students,
    search,
    setSearch,
    setSelectedStudent,
    fetchStudents
}) {
    return (
        <>
            <SearchBar
                search={search}
                setSearch={setSearch}
            />

            <StudentTable
                students={students}
                search={search}
                setSelectedStudent={setSelectedStudent}
                fetchStudents={fetchStudents}
            />
        </>
    );
}

export default StudentsPage;