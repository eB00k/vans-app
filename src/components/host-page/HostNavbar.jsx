import React from "react";
import { Link, NavLink } from "react-router-dom";
import './hostpage.scss'

export default function HostNavbar() {
  return (
    <div className="host-navigation">
      <NavLink to={"/host"} end>Dashboard</NavLink>
      <NavLink to={"/host/income"}>Income</NavLink>
      <NavLink to={"/host/vans"}>Vans</NavLink>
      <NavLink to={"/host/reviews"}>Reviews</NavLink>
    </div>
  );
}
