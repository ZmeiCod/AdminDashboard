import React, { useState, useEffect } from "react";
import AuthService from "../api/userApi";
import axios from "axios";
import $api from "../api";

const UserStore = () => {
  const [user, setUser] = useState({});
  const [isAuth, setAuth] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const login = async (email, password) => {
    try {
      const response = await AuthService.login(email, password);
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      setAuth(true);
      setUser(response.data.user);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  };

  const registration = async (email, password) => {
    try {
      const response = await AuthService.registration(email, password);
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      setAuth(true);
      setUser(response.data.user);
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  };

  const logout = async () => {
    try {
      await AuthService.logout();
      localStorage.removeItem("token");
      setAuth(false);
      setUser({});
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  };

  const checkAuth = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${$api}/refresh`, {
        withCredentials: true,
      });
      console.log(response);
      localStorage.setItem("token", response.data.accessToken);
      setAuth(true);
      setUser(response.data.user);
    } catch (e) {
      console.log(e.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return {
    user,
    isAuth,
    isLoading,
    login,
    registration,
    logout,
    checkAuth,
  };
};

export default UserStore;
