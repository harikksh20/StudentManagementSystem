import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import api from "./services/api";

import Sidebar from "./components/Sidebar";

import DashboardPage from "./pages/DashboardPage";
import StudentsPage from "./pages/StudentsPage";
import AddStudentPage from "./pages/AddStudentPage";

import "./css/Layout.css";

function App() {

    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [search, setSearch] = useState("");

    // Sidebar State
    const [sidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await api.get("students/");
            setStudents(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="app">

            <Sidebar
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
            />

            <main
                className={
                    sidebarOpen
                        ? "main-content"
                        : "main-content collapsed"
                }
            >

                <Routes>

                    <Route
                        path="/"
                        element={
                            <DashboardPage
                                students={students}
                            />
                        }
                    />

                    <Route
                        path="/students"
                        element={
                            <StudentsPage
                                students={students}
                                search={search}
                                setSearch={setSearch}
                                setSelectedStudent={setSelectedStudent}
                                fetchStudents={fetchStudents}
                            />
                        }
                    />

                    <Route
                        path="/add-student"
                        element={
                            <AddStudentPage
                                selectedStudent={selectedStudent}
                                setSelectedStudent={setSelectedStudent}
                                fetchStudents={fetchStudents}
                            />
                        }
                    />

                </Routes>

            </main>

        </div>
    );
}

export default App;