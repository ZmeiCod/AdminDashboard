import "./index.css";
import React from "react";
import { Context } from "./Main.jsx";
import AppRouter from "./AppRouter.jsx";
import { observer } from "mobx-react-lite";
import { BrowserRouter } from "react-router-dom";


const App = observer(() => {
  const { user } = React.useContext(Context);

  React.useEffect(() => {

    if (localStorage.getItem("token")) {
      user.checkAuth();
    }
  }, [user]);

  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;

