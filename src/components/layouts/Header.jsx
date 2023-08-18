import React from "react";
import { NavLink, Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./header.scss";

export default function Header() {
  return (
    <header>
      <Link to="/" className="header__logo">
        #VANLIFE
      </Link>
      <nav>
        <NavLink to="/host">Host</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/vans">Vans</NavLink>
        <NavLink to="/login">
          <AccountCircleIcon />
        </NavLink>
      </nav>
    </header>
  );
}
