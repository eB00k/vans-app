import React from "react";
import { NavLink,Link } from "react-router-dom";
import './header.scss'

export default function Header() {
  return (
    <header>
      <Link to="/" className="header__logo">#VANLIFE</Link>
      <nav>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/vans">Vans</NavLink>
      </nav>
    </header>
  );
}
