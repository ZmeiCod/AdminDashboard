import React from "react";
import { Context } from "../Main";
import ChevronsRight from "../assets/ui/ChevronsRight.svg";
import ChevronsLeft from "../assets/ui/ChevronsLeft.svg";
import Graph from "../assets/ui/Graph.svg";
import Profile from "../assets/ui/Profile.svg";

import Security from "../assets/ui/Security.svg";
import Setting from "../assets/ui/Settings.svg";

import Exit from "../assets/ui/Exit.svg";

export default function Sidebar() {
  const { user } = React.useContext(Context);
  const [isExpanded, setIsExpanded] = React.useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside id="sidebar" className={isExpanded ? "expand" : ""}>
      <div className="d-flex justify-content-between p-4">
        {isExpanded && (
          <div className="sidebar-logo">
            <a href="#">AdminDash</a>
          </div>
        )}
        <button
          className="toggle-btn border-0"
          type="button"
          onClick={toggleSidebar}
        >
          <img
            src={isExpanded ? ChevronsLeft : ChevronsRight}
            alt="Toggle"
            className="icon"
          />
        </button>
      </div>

      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <img src={Profile} alt="Toggle" className="icon" />
            {isExpanded && <span>Профиль</span>}
          </a>
        </li>

        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <img src={Graph} alt="Toggle" className="icon" />
            {isExpanded && <span>Главная</span>}
          </a>
        </li>

        <li className="sidebar-item">
          <a
            href="#"
            className="sidebar-link collapsed has-dropdown"
            data-bs-toggle="collapse"
            data-bs-target="#auth"
            aria-expanded="false"
            aria-controls="auth"
          >
            <img src={Security} alt="Toggle" className="icon" />
            {isExpanded && <span>Безопасность</span>}
          </a>
          <ul
            id="auth"
            className="sidebar-dropdown list-unstyled collapse"
            data-bs-parent="#sidebar"
          >
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                Пользователи
              </a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">
                Регистрация
              </a>
            </li>
          </ul>
        </li>

        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <img src={Setting} alt="Toggle" className="icon" />
            {isExpanded && <span>Настройки</span>}
          </a>
        </li>
      </ul>

      <div className="sidebar-footer">
        <a className="sidebar-link" onClick={() => user.logout()}>
          <img src={Exit} alt="Toggle" className="icon" />

          {isExpanded && <span>Logout</span>}
        </a>
      </div>
    </aside>
  );
}
