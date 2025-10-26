import React from "react";
import "../index.css";
import { observer } from "mobx-react-lite";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Graph from "../components/Graph";

const Home = observer(() => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        <Graph />
      </div>
    </div>
  );
});

export default Home;
