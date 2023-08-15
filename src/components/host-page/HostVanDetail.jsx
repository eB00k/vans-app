import React, { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import HostService from "../../services/host.service";
import VanNavigation from "./VanNavigation";

export default function HostVanDetail() {
  const [currentVan, setCurrentVan] = useState();
  const { vanId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await HostService.getHostVanById(vanId);
        setCurrentVan(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="host-page host-van-detail">
      {currentVan && currentVan.id ? (
        <>
          <Link to=".." relative="path">
            {" "}
            {"<"}Back to all vans
          </Link>
          <div className="host-van-detail-container">
            <div className="host-van-detail-box">
              <img src={currentVan.imageUrl} alt="van" />
              <div className="detail-info">
                <div className={`btn ${currentVan.type}`}>
                  {currentVan.type}
                </div>
                <h2>{currentVan.name}</h2>
                <h4>
                  ${currentVan.price}
                  <small>/day</small>
                </h4>
              </div>
            </div>
            <VanNavigation id={vanId} />
            <Outlet context={currentVan}/>
          </div>
        </>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}
