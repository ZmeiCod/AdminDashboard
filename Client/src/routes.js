import Auth from "./pages/Auth";
import Home from "./pages/Home";

// Константы маршрутов
export const ROUTE_HOME = "/home";
export const LOGIN_ROUTE = "/login";

// Маршруты для аутентифицированных пользователей
export const authRoutes = [
  {
    path: ROUTE_HOME,
    Component: Home,
  },

];

// Публичные маршруты
export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
];
