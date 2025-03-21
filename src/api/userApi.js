import { $authHost, $host } from "./index";
import { jwtDecode } from "jwt-decode";

export const registration = async (email, password) => {
  const { data } = await $host.post("api/user/registration", {
    email,
    password,
    role: "USER",
  });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const login = async (email, password) => {
  const { data } = await $host.post("api/user/login", { email, password });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export const checkToken = async () => {
  try {
    const { data } = await $authHost.get("api/user/auth");
    localStorage.setItem("token", data.token);
    return jwtDecode(data.token);
  } catch (error) {
    if (error.response && error.response.status === 401) {
      throw new Error('Token expired or invalid');
    }
    throw error; // обработка других ошибок
  }
};

export const startTokenCheck = (currentPath) => {
  return setInterval(async () => {
    try {
      await checkToken();
    } catch (error) {
      console.log('Token check failed:', error);
      if (currentPath !== '/login') {
        window.location.href = "/login";
      }
    }
  }, 10000); // проверка каждые 10 секунд
};