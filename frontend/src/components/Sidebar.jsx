import { NavLink } from "react-router-dom";
import "../css/Sidebar.css";

function Sidebar({ sidebarOpen, setSidebarOpen }) {

    return (

        <div
            className={`sidebar ${
                sidebarOpen ? "show" : "collapsed"
            }`}
        >

            <button
                className="toggle-btn"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                ☰
            </button>

            <h2 className="logo">
                {sidebarOpen ? "🎓 StudentMS" : "🎓"}
            </h2>

            <nav>

                <NavLink to="/" className="menu-item">
                    <span>🏠</span>
                    {sidebarOpen && "Dashboard"}
                </NavLink>

                <NavLink to="/students" className="menu-item">
                    <span>🎓</span>
                    {sidebarOpen && "Students"}
                </NavLink>

                <NavLink to="/add-student" className="menu-item">
                    <span>➕</span> 
                    {sidebarOpen && "Add Student"}
                </NavLink>

                {/* <NavLink to="/reports" className="menu-item">
                    📊 {sidebarOpen && "Reports"}
                </NavLink>

                <NavLink to="/settings" className="menu-item">
                    ⚙️ {sidebarOpen && "Settings"}
                </NavLink> */}

            </nav>

        </div>

    );
}

export default Sidebar;