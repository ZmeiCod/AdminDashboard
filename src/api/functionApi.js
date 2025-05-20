import $api from "./index";

class UserService {
  static fetchUsers() {
    return $api.get("/api/user/users");
  }
}

export default UserService;