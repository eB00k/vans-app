import React from "react";
import { Link } from "react-router-dom";
import './header.scss'

export default function Header() {
  return (
    <header>
      <Link to="/" className="header__logo">#VANLIFE</Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  );
}
