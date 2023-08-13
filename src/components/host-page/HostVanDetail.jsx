import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function HostVanDetail() {
  const { vanId } = useParams();
  const navigate = useNavigate();
  return (
    <div className="host-page host-van-detail">
      <h5 onClick={() => navigate(-1)}> {"<"}Back to all vans</h5>
      
    </div>
  );
}
