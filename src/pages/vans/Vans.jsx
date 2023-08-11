import React from "react";
import { useEffect, useState } from "react";
import { VanService } from "../../services/vans.service";
import VansCatalog from "../../components/vans-page/VansCatalog";

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await VanService.getVans();
      console.log(data.vans);
      setVans(data.vans);
    };
    fetchData();
  }, []);

  return (
    <div className="vans-container">
      <h2>Explore our van options</h2>
      <div className="vans-filter">
        <span>Simple</span>
        <span>Luxury</span>
        <span>Rugged</span>
        <span>Clear Filters</span>
      </div>
      <VansCatalog vans={vans}/>
    </div>
  );
}
