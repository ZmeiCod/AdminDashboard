import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Context } from "./main.jsx";
import { observer } from "mobx-react-lite";
import { authRoutes, publicRoutes, LOGIN_ROUTE } from "./routes";

const AppRouter = observer(() => {
  const { user } = useContext(Context);

  return (
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
  );
});

export default AppRouter;
