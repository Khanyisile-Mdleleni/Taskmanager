import React from "react";
import './home.scss';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <h3>Welcome to TaskMaster, Your Ultimate Tool for Task Management!</h3>{" "}
        <br /> <br />
        <p>
          With TaskMaster, you can organize your projects, optimize your
          workflow, and manage your obligations <br />
          more effectively than before and it provides a full range of tools
          that are designed to empower both
          <br /> people and teams to manage their work efficiently.
        </p>
      </div>
    </div>
  );
}

export default Home;
