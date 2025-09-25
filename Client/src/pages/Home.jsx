import React from "react";
import "../index.css";
import { observer } from "mobx-react-lite";

import Sidebar from "../components/Sidebar";

const Shop = observer(() => {


  return (
    <div>
      <Sidebar/>
    </div>
  );
});

export default Shop;
