import axios from "axios";

const $host = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const $authHost = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$api.interceptors.response.use((response) => {
  return response;
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && originalRequest && !originalRequest._isRetry) {
      originalRequest._isRetry = true;
      try {
          const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
          localStorage.setItem('token', response.data.accessToken);
          return $api.request(originalRequest);
      } catch (e) {
          console.log('НЕ АВТОРИЗОВАН');
      }
  }
  throw error;
});

export { $host, $authHost };
