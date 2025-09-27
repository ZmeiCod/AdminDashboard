import "./index.css";
import React, {useContext} from "react";
import { Context } from "./Main.jsx";
// import AppRouter from "./AppRouter.jsx";
import { observer } from "mobx-react-lite";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes, LOGIN_ROUTE } from "./routes";

const App = observer(() => {
  const { user } = useContext(Context);

  React.useEffect(() => {

    if (localStorage.getItem("token")) {
      user.checkAuth();
    }
  }, [user]);

  return (
    <BrowserRouter>
      <Routes>
      {/* Отображение защищенных маршрутов для авторизованных пользователей */}
      {user.isAuth && 
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))
      }

      {/* Отображение публичных маршрутов для неавторизованных пользователей */}
      {!user.isAuth && 
        publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))
      }

      {/* Если пользователь не авторизован, перенаправляем на страницу логина */}
      <Route path="*" element={<Navigate to={user.isAuth ? authRoutes[0].path : LOGIN_ROUTE} />} />
    </Routes>
    </BrowserRouter>
  );
});

export default App;

