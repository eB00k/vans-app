import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Pricing() {
  const van = useOutletContext();
  return (
    <div className="host-van-detail-pricing">
      <span>${van.price}</span>
      <small>/day</small>
    </div>
  );
}
