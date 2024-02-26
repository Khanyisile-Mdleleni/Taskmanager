import "./Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul className="sidebar">
        <li className="list-item">
          <Link to="/">
            <i className="fas fa-home" id = "home-btn"></i> Home
          </Link>
        </li>
        <li className="list-item">
          <Link to="/taskmanager">
            <i className="fas fa-tasks"></i> Tasks
          </Link>
        </li>
        <li className="list-item">
          <Link to="/dashboard">
            <i className="fas fa-chart-bar"></i> Dashboard
          </Link>
        </li>
        <li className="list-item">
          <Link to="/help">
            <i className="fas fa-question-circle"></i> Help
          </Link>
        </li>
        <li className="list-item">
          <Link to="/">
            <i className="fas fa-arrow-left"></i> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
