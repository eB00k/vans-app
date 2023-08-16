import React from "react";
import { makeCapitalize } from "../../utils/makeCapitalize";

export default function FilterButtons({ filters, handleFilter }) {
  return (
    <>
      {Object.keys(filters).map((filter) => {
        return (
          <span
            className={`filter-btn ${filters[filter] ? "active" : ""}`}
            onClick={() => handleFilter("type", filter)}
            key={filter}
          >
            • {makeCapitalize(filter)}
          </span>
        );
      })}
    </>
  );
}
