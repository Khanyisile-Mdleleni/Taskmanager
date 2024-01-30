import "./Sidebar.scss";
import { useSelector } from "react-redux";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";

const Sidebar = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;

  return (
    <div className="SideMenu">
      {/* <ul className='sidebar'>
				<li className='list-item'>
					<h5>{currentUser.username}</h5> 
				</li>
				</ul> */}
      <Menu
        onClick={(item) => {
          navigate(item.key);
        }}
        items={[
          { label: "Home", key: "/", icon: <HouseOutlinedIcon /> },
          { label: "Tasks", key: "/tasks", icon: <AssignmentOutlinedIcon /> },
          {
            label: "Dashboard",
            key: "/dashboard",
            icon: <TableChartOutlinedIcon />,
          },
          { label: "Help", key: "/help", icon: <HelpOutlineOutlinedIcon /> },
          { label: "Logout", key: "/logout", icon: <ExitToAppOutlinedIcon /> },
        ]}
        style={{ backgroundColor: "#C2D9FF", height: "100vh" }}
      ></Menu>
    </div>
  );
};

export default Sidebar;
