import React from "react";
import { NavLink, Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./header.scss";

export default function Header() {
  function logout() {
    localStorage.removeItem("token");
    console.log(localStorage.getItem("token"));
  }
  return (
    <header>
      <Link to="/" className="header__logo">
        #VANLIFE
      </Link>
      <nav>
        <NavLink to="/host">Host</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/vans">Vans</NavLink>
        <Link to="/login" className="no user-icon">
          <AccountCircleIcon />
        </Link>
        <span onClick={logout} className="no logout">
          out
        </span>
      </nav>
    </header>
  );
}
