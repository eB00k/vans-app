import React from "react";
import { Link, NavLink } from "react-router-dom";
import './hostpage.scss'

export default function HostNavbar() {
  return (
    <div className="host-navigation">
      <NavLink to={"."} end>Dashboard</NavLink>
      <NavLink to={"income"}>Income</NavLink>
      <NavLink to={"vans"}>Vans</NavLink>
      <NavLink to={"reviews"}>Reviews</NavLink>
    </div>
  );
}
