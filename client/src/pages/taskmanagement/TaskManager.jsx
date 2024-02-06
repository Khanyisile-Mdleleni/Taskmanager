import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import Files from "../Files/Files";
import Notes from "../Notes/Notes";
import Tasks from "../Tasks/Tasks";
import Board from "../Board/Board";
import { useSelector } from "react-redux";
import Sidebar from "../../components/sidebar/Sidebar";

function taskmanager() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { auth } = useSelector((state) => ({ ...state }));
  const { currentUser } = auth;
  return (
    <>
      <div className="dashboard">
        <div className="dashboard__left">
          <Sidebar />
        </div>
        <div className="dashboard__right">
          <div className="dashboard__rightContent"></div>
          <h4 className="title">
            Welcome Back {currentUser.username}!
            <span id="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>{" "}
          </h4>
          <div className="Tasks">
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      icon={<AssignmentOutlinedIcon />}
                      iconPosition="start"
                      label="Tasks"
                      value="1"
                    />
                    <Tab
                      icon={<TableChartOutlinedIcon />}
                      iconPosition="start"
                      label="Board"
                      value="2"
                      style={{ marginLeft: "100px" }}
                    />
                    <Tab
                      icon={<PictureAsPdfOutlinedIcon />}
                      iconPosition="start"
                      label="Files"
                      value="3"
                      style={{ marginLeft: "100px" }}
                    />
                    <Tab
                      icon={<DriveFileRenameOutlineOutlinedIcon />}
                      iconPosition="start"
                      label="Notes"
                      value="4"
                      style={{ marginLeft: "100px" }}
                    />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <Tasks />
                </TabPanel>
                <TabPanel value="2">
                  <Board />
                </TabPanel>
                <TabPanel value="3">
                  <Files />
                </TabPanel>
                <TabPanel value="4">
                  <Notes />
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
}

export default taskmanager;
