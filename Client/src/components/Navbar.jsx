import React from "react";
import Account from "../assets/account.png";
import Search from "../assets/ui/Search.svg";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand px-4 py-3">
      <form action="#" className="d-none d-sm-inline-block">
        <div className="input-group input-group-navbar">
            <input type="text" className="form-control border-0 rounded-0 pe-0" placeholder="Поиск..." aria-label="Search"/>
            <button className="btn border-0 rounded-0" type="button">
                <img src={Search} alt="Search" />
            </button>
        </div>
      </form>
      <div className="navbar-collapse collapse">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item dropdown">
            <a href="#" data-bs-toggle="dropdown" className="nav-icon pe-md-0">
              <img src={Account} className="avatar img-fluid" alt="" />
            </a>
            {/* <div className="dropdown-menu dropdown-menu-end rounded-0 border-0 shadow mt-3">
                <a href="#" className="dropdown-item">
                    <span>Аналитика</span>
                </a>
                <a href="#" className="dropdown-item">
                    <span>Политика</span>
                </a>
            </div> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}
