import React from "react";
import { NavLink } from "react-router-dom";

export default function VanNavigation({ id }) {
  return (
    <div className="van-navigation">
      <NavLink to={"."} end>
        Detail
      </NavLink>
      <NavLink to={"pricing"}>Pricing</NavLink>
      <NavLink to={"photos"}>Photos</NavLink>
    </div>
  );
}
