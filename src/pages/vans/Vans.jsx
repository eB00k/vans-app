import React from "react";
import { useEffect, useState } from "react";
import { VanService } from "../../services/vans.service";
import VansCatalog from "../../components/vans-page/VansCatalog";
import "./van.scss";

const FILTER_OPTIONS = {
  simple: false,
  luxury: false,
  rugged: false,
};

export default function Vans() {
  const [allVans, setAllVans] = useState([]);
  const [filters, setFilters] = useState(FILTER_OPTIONS);
  const [displayedVans, setDisplayedVans] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await VanService.getVans();
      setAllVans(data.vans);
    } catch (err) {
      console.error("Error fetching van data", err);
    }
  };

  useEffect(() => {
    filterVans();
  }, [filters]);

  function filterVans() {
    const filteredVanList = allVans.filter((van) => filters[van.type]);
    setDisplayedVans([...filteredVanList]);
  }

  function handleFilters(filter) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  }

  function clearFilter() {
    setFilters(FILTER_OPTIONS);
    fetchData();
  }

  return (
    <div className="vans-container">
      <h2>Explore our van options</h2>
      <div className="vans-filter">
        {Object.keys(FILTER_OPTIONS).map((filter) => (
          <span
            key={filter}
            className={`filter-btn ${filters[filter] ? "active" : ""}`}
            onClick={() => handleFilters(filter)}
          >
            • {filter[0].toUpperCase() + filter.slice(1)}
          </span>
        ))}
        <span className="clear-btn" onClick={clearFilter}>
          Clear Filters
        </span>
      </div>
      <VansCatalog vans={displayedVans.length ? displayedVans : allVans} />
    </div>
  );
}
