import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Tasks from "./Pages/Tasks";
import Dashboard from "./Pages/Dashboard";
import Help from "./Pages/Help";
import Logout from "./Pages/Logout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Contact from "./Pages/Contact";
// import Profile from "./Pages/Profile";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tasks" element={<Tasks />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/help" element={<Help />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </>
  );
}

export default AppRoutes;