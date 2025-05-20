import $api from "./index";

const AuthResponse = {
  accessToken: "",
  refreshToken: "",
  user: {
    email: "",
    id: "",
    role: "",
  },
};

class AuthService {
  constructor() {
    this.API_URL = import.meta.env.VITE_API_URL;
    this.user = {};
    this.isAuth = false;
    this.isLoading = false;
  }

  // Путь до регистрации пользователя
  static async registration(email, password) {
    return $api.post("/api/user/registration", { email, password });
  }

  // Путь до входа в систему
  static async login(email, password) {
    return $api.post("/api/user/login", { email, password });
  }

  // Путь до выхода из системы
  static async logout() {
    return $api.post("/api/user/logout");
  }
}

export default AuthService;
