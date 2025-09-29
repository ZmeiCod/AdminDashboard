import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Users from "./pages/Users";

// Константы маршрутов
export const ROUTE_HOME = "/home";
export const LOGIN_ROUTE = "/login";
export const USERS_ROUTE = "/users";

// Маршруты для аутентифицированных пользователей
export const authRoutes = [
  {
    path: ROUTE_HOME,
    Component: Home,
  },
  {
    path: USERS_ROUTE,
    Component: Users,
  },
];

// Публичные маршруты
export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
];
