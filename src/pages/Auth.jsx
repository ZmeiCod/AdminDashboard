import React from "react";
import logo from "../assets/icon.svg";
import  AuthService  from "../api/userApi";
import { ROUTE_HOME } from "../utils/consts";
import { useNavigate } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";
import { FaFingerprint, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Context } from "..";

export default function Auth() {

  const navigate = useNavigate();
  const { UserStore } = React.useContext(Context)

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const click = async () => {
    try {
      let data = await AuthService.login(email, password);
      console.log(data)
      if (data) {
        navigate(ROUTE_HOME);
      }
    } catch (e) {
      alert(e.response?.data?.message || "Произошла ошибка");
    }
  };

  return (
    <div className="auth w-full h-screen flex items-center justify-center">
      <div className="w-[90%] max-w-sm lg:max-w-md p-5 bg-neutral-800 flex-col flex items-center gap-3 rounded-xl shadow-orange-500 shadow-lg bg-opacity-75">
        <img src={logo} alt="logo" className="w-12 lg:w-14" />
        <h1 className="text-lg font-semibold tracking-wider text-orange-500">
          Авторизация
        </h1>

        <div className="w-full flex flex-col gap-3">
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2">
            <MdAlternateEmail />
            <input
              className="bg-transparent border-0 w-full outline-none text-sm lg:text-base"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
          </div>
          <div className="w-full flex items-center bg-gray-800 p-2 rounded-xl gap-2 relative">
            <FaFingerprint />
            <input
              className="bg-transparent border-0 w-full outline-none text-sm lg:text-base"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
            />
            {showPassword ? (
              <FaRegEyeSlash
                className="absolute right-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <FaRegEye
                className="absolute right-3 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
        </div>

        <button
          onClick={(click)}
          className="w-full p-2 border border-orange-500 rounded-xl mt-3 text-orange-500 hover:bg-orange-500 hover:text-white text-sm ls:text-base transition duration-200"
        >
          Войти
        </button>
      </div>
    </div>
  );
}
