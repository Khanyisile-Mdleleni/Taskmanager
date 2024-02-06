import "./App.css";
import Header from "./components/Header/Header";
import SignUp from "./components/registration/SignUp";
import SignIn from "./components/registration/SignIn";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Help from "./pages/Help/help";
import Contact from "./pages/Contact/Contact";
import TaskManager from "./pages/taskmanagement/TaskManager";
import Files from "./pages/Files/Files";
import Notes from "./pages/Notes/Notes";
import Board from "./pages/Board/Board";
import Tasks from "./pages/Tasks/Tasks";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/main.scss";
import RequireAuth from "./utils/RequireAuth";
import { useSelector } from "react-redux";

function App() {
  const { auth } = useSelector((state) => ({ ...state }));
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/taskmanager"
            element={
              <RequireAuth>
                <TaskManager />
              </RequireAuth>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route
            path="/help"
            element={
              <RequireAuth>
                <Help />
              </RequireAuth>
            }
          />
          <Route
            path="/contact"
            element={
              <RequireAuth>
                <Contact />
              </RequireAuth>
            }
          />
          <Route
            path="/files"
            element={
              <RequireAuth>
                <Files />
              </RequireAuth>
            }
          />
          <Route
            path="/notes"
            element={
              <RequireAuth>
                <Notes />
              </RequireAuth>
            }
          />
          <Route
            path="/board"
            element={
              <RequireAuth>
                <Board />
              </RequireAuth>
            }
          />
          <Route
            path="/tasks"
            element={
              <RequireAuth>
                <Tasks />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
