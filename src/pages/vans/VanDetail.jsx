import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { VanService } from "../../services/vans.service";
import "./vandetail.scss";

export default function VanDetail() {
  const [van, setVan] = useState({});
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await VanService.getVanById(params.id);
      console.log(data);
      setVan(data);
    };
    fetchData();
  }, [params.id]);

  return van.id ? (
    <div className="van-detail">
      <div className="detail-back" onClick={() => navigate("/vans")}>
        {"<"} Back to all vans
      </div>
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
