import React from "react";
import { useEffect, useState } from "react";
import { VanService } from "../../services/vans.service";
import VansCatalog from "../../components/vans-page/VansCatalog";
import "./van.scss";

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
        <span className="filter-btn">• Simple</span>
        <span className="filter-btn">• Luxury</span>
        <span className="filter-btn">• Rugged</span>
        <span className="clear-btn">Clear Filters</span>
      </div>
      <VansCatalog vans={vans} />
    </div>
  );
}
