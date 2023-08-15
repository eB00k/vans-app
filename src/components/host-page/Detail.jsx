import React from "react";
import { useOutletContext } from "react-router-dom";
import { makeCapitalize } from "../../utils/makeCapitalize";

export default function Detail() {
  const van = useOutletContext();

  return (
    <div className="host-van-detail-info">
      <p><span>Name:</span>{van.name}</p>
      <p><span>Category:</span>{makeCapitalize(van.type)}</p>
      <p><span>Description:</span>{van.description}</p>
    </div>
  );
}
