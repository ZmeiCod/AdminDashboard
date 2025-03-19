import React from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaTachometerAlt, FaUsers, FaBox, FaCog } from "react-icons/fa";
import { ROUTE_LOGIN } from "../utils/consts";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { icon: <FaTachometerAlt />, label: "Главная" },
  { icon: <FaBox />, label: "Слайды" },
  { icon: <FaBox />, label: "Категории" },
  { icon: <FaBox />, label: "Товары" },
];

export default function Layout({ onSelectCategory }) {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300 dark:border-orange-400 dark:bg-neutral-800 dark:text-white flex flex-col justify-between">
      <div>
        <h1 className="text-orange-400 text-2xl font-bold hidden md:block mt-4 text-center italic">
          Maya CRM
        </h1>

        <div className="mt-5">
          <h3 className="text-lg font-semibold mb-2">Основное</h3>
          <ul className="flex flex-col text-xl">
            {menuItems.map((item, index) => (
              <li
                key={index}
                onClick={() => onSelectCategory(item.label)}
                className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-neutral-600 hover:text-white"
              >
                {item.icon}
                <span className="hidden md:inline">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-5">
          <h3 className="text-lg font-semibold mb-2">Настройки</h3>
          <ul className="flex flex-col text-xl">
            <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-neutral-600 hover:text-white">
              <FaUsers />
              <span className="hidden md:inline">Пользователи</span>
            </li>
            <li className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer hover:bg-neutral-600 hover:text-white">
              <FaCog />
              <span className="hidden md:inline">Настройки</span>
            </li>
          </ul>
        </div>
      </div>

      <ul className="flex flex-col mt-5 text-xl">
        <li
          className="flex items-center py-3 px-2 space-x-4 mb-6 hover:rounded hover:cursor-pointer hover:bg-neutral-600 hover:text-white"
          onClick={() => navigate(ROUTE_LOGIN)}
        >
          <RiLogoutBoxLine />
          <span className="hidden md:inline">Выйти</span>
        </li>
      </ul>
    </div>
  );
}
