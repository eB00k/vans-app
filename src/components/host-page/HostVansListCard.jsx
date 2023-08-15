import React from "react";
import { Link } from "react-router-dom";

export default function HostVansListCard({ van = {} }) {
  return (
    <Link to={`/host/vans/${van.id}`}>
      <div className="host-van-card">
        <img src={van.imageUrl} alt="van" />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price}<small>/day</small></p>
        </div>
      </div>
    </Link>
  );
}
