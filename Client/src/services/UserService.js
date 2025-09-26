import {$api} from "./ApiService";

// Класс для управления пользовательским
export default class UserService {
  // Запрос на показ всех пользователей
  static fetchUsers() {
    return $api.get("/api/user/users");
  }
}
