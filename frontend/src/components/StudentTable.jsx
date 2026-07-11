import api from "../services/api";
import "../css/Table.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function StudentTable({
    students,
    search,
    setSelectedStudent,
    fetchStudents
}) {

    const navigate = useNavigate();

    const deleteStudent = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this student?"
        );

        if (!confirmDelete) return;

        try {

            await api.delete(`students/${id}/`);

            toast.success("Student Deleted Successfully");

            fetchStudents();

        } catch (error) {

            console.log(error);

            toast.error("Delete Failed");

        }

    };

    const filteredStudents = students.filter((student) => {

        return (

            student.name.toLowerCase().includes(search.toLowerCase()) ||

            student.email.toLowerCase().includes(search.toLowerCase()) ||

            student.course.toLowerCase().includes(search.toLowerCase()) ||

            student.city.toLowerCase().includes(search.toLowerCase())

        );

    });

    return (

        <div className="table-container">

            <h2>Student List</h2>

            <table>

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Course</th>
                        <th>City</th>
                        <th>Actions</th>
                    </tr>

                </thead>

                <tbody>

                    {filteredStudents.length > 0 ? (

                        filteredStudents.map((student) => (

                            <tr key={student.id}>

                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.gender}</td>
                                <td>{student.email}</td>
                                <td>{student.phone}</td>
                                <td>{student.course}</td>
                                <td>{student.city}</td>

                                <td>

                                    <button
                                        className="edit-btn"
                                        onClick={() =>{
                                            setSelectedStudent(student);
                                            navigate("/add-student");
                                        }}
                                    >
                                        Edit
                                    </button>

                                    <button
                                        className="delete-btn"
                                        onClick={() =>
                                            deleteStudent(student.id)
                                        }
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))

                    ) : (

                        <tr>

                            <td colSpan="9">
                                No Students Found
                            </td>

                        </tr>

                    )}

                </tbody>

            </table>

        </div>

    );
}

export default StudentTable;