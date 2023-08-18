import React, { useMemo } from "react";
import { Link, useLocation, useLoaderData } from "react-router-dom";
import { VanService } from "../../services/vans.service";
import "./vandetail.scss";

export function loader({ params }) {
  const fetchData = async () => {
    try {
      const response = await VanService.getVanById(params.id);
      return response.data.vans;
    } catch (err) {
      throw err;
    }
  };
  return fetchData();
}

export default function VanDetail() {
  const location = useLocation();
  const { state } = useMemo(() => location, [location]);
  const van = useLoaderData();

  const stateSearch = state?.search || "";
  const type = state?.type || "all";

  return (
    <div className="van-detail">
      <Link to={`../?${stateSearch}`} className="detail-back" relative="path">
        {"<"} Back to {type} vans
      </Link>
      <img src={van.imageUrl} alt="" />
      <div className={`type ${van.type}`}>{van.type}</div>
      <h2>{van.name}</h2>
      <div className="price">
        ${van.price}
        <small>/day</small>
      </div>
      <p>&nbsp;{van.description}</p>
      <div className="rent-btn btn">Rent this van</div>
    </div>
  );
}
