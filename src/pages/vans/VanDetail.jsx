import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { VanService } from "../../services/vans.service";
import "./vandetail.scss";

export default function VanDetail() {
  const [van, setVan] = useState({});
  const params = useParams();
  const location = useLocation();
  const { pathname, search, state } = useMemo(() => location, [location]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await VanService.getVanById(params.id);
      setVan(data);
    };
    fetchData();
  }, [params.id]);

  const stateSearch = state?.search || "";
  const type = state?.type || "all";

  return van.id ? (
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
  ) : (
    <div>Loading...</div>
  );
}
