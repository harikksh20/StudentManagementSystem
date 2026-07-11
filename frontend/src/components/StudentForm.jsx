import { useState, useEffect } from "react";
import api from "../services/api";
import "../css/Form.css";
import { toast } from "react-toastify";

function StudentForm({
    selectedStudent,
    setSelectedStudent,
    fetchStudents
}) {

    const [student, setStudent] = useState({
        name: "",
        age: "",
        gender: "",
        email: "",
        phone: "",
        course: "",
        city: ""
    });

    useEffect(() => {
        if (selectedStudent) {
            setStudent(selectedStudent);
        } else {
            setStudent({
                name: "",
                age: "",
                gender: "",
                email: "",
                phone: "",
                course: "",
                city: ""
            });
        }
    }, [selectedStudent]);

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            if (selectedStudent) {

                await api.put(
                    `students/${selectedStudent.id}/`,
                    student
                );

                toast.success("Student Updated Successfully");

            } else {

                await api.post(
                    "students/",
                    student
                );

                toast.success("Student Added Successfully");

            }

            setStudent({
                name: "",
                age: "",
                gender: "",
                email: "",
                phone: "",
                course: "",
                city: ""
            });

            setSelectedStudent(null);

            fetchStudents();

        } catch (error) {

            console.log(error);

            if (error.response) {
                alert(JSON.stringify(error.response.data));
            } else {
                toast.error("Something went wrong");
            }

        }
    };

    return (

        <div className="form-container">

            <h2>
                {selectedStudent ? "Update Student" : "Add Student"}
            </h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={student.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={student.age}
                    onChange={handleChange}
                    required
                />

                <select
                    name="gender"
                    value={student.gender}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={student.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={student.phone}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="course"
                    placeholder="Course"
                    value={student.course}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={student.city}
                    onChange={handleChange}
                    required
                />

                <button type="submit">
                    {selectedStudent ? "Update Student" : "Add Student"}
                </button>

            </form>

        </div>

    );
}

export default StudentForm;