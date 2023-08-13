import React from "react";
import { useEffect, useState } from "react";
import HostService from "../../services/host.service";
import HostVansListCard from "./HostVansListCard";

export default function HostVans() {
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await HostService.getHostVans();
    setHostVans(data);
  };
  return (
    <div className="host-page host-vans">
      <h2 className="host-vans-title">Your Listed Vans</h2>
      <div className="host-vans-list">
        {hostVans.length > 0 ? (
          hostVans.map((van) => <HostVansListCard van={van} key={van.id} />)
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
}
