import "./Sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <ul className="sidebar">
        <li className="list-item">
          <Link to="/">Home</Link>
        </li>
        <li className="list-item">
          <Link to="/settings">Tasks</Link>
        </li>
        <li className="list-item">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="list-item">
          <Link to="/help">Help</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
