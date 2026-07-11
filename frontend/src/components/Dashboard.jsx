import "../css/Dashboard.css";

function Dashboard({ students }) {

    const totalStudents = students.length;

    const totalMale = students.filter(
        student => student.gender === "Male"
    ).length;

    const totalFemale = students.filter(
        student => student.gender === "Female"
    ).length;

    const totalCourses = new Set(
        students.map(student => student.course)
    ).size;

    const totalCities = new Set(
        students.map(student => student.city)
    ).size;

    const recentStudents = [...students].slice(-5).reverse();

    const today = new Date();

    return (
        <div className="dashboard-container">

            <div className="welcome-card">

                <div>

                    <h1>👋 Welcome Back</h1>

                    <p>
                        Student Management System Dashboard
                    </p>

                </div>

                <div className="date-box">

                    <h3>{today.toLocaleDateString()}</h3>

                    <p>{today.toLocaleTimeString()}</p>

                </div>

            </div>

            <div className="stats-grid">

                <div className="stat-card blue">
                    <h2>{totalStudents}</h2>
                    <p>Total Students</p>
                </div>

                <div className="stat-card green">
                    <h2>{totalMale}</h2>
                    <p>Male Students</p>
                </div>

                <div className="stat-card pink">
                    <h2>{totalFemale}</h2>
                    <p>Female Students</p>
                </div>

                <div className="stat-card orange">
                    <h2>{totalCourses}</h2>
                    <p>Courses</p>
                </div>

                <div className="stat-card purple">
                    <h2>{totalCities}</h2>
                    <p>Cities</p>
                </div>

            </div>

            <div className="dashboard-bottom">

                <div className="recent-card">

                    <h2>🆕 Recent Students</h2>

                    {
                        recentStudents.length === 0 ?

                            <p>No Students Found</p>

                            :

                            recentStudents.map(student => (

                                <div
                                    className="student-item"
                                    key={student.id}
                                >

                                    <div>

                                        <strong>
                                            {student.name}
                                        </strong>

                                        <p>{student.course}</p>

                                    </div>

                                    <span>
                                        {student.city}
                                    </span>

                                </div>

                            ))
                    }

                </div>

                <div className="quick-card">

                    <h2>⚡ Quick Tips</h2>

                    <ul>

                        <li>✔ Add new students</li>

                        <li>✔ Update student details</li>

                        <li>✔ Search students instantly</li>

                        <li>✔ Delete unwanted records</li>

                        <li>✔ Manage everything easily</li>

                    </ul>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;