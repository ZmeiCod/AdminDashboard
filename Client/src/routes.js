import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  ROUTE_HOME,
} from "./utils/consts";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Shop from "./pages/Shop";

export const authRoutes = [
  {
    path: ROUTE_HOME,
    Component: Shop,
  },
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
];
