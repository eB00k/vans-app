import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Photos() {
  const van = useOutletContext();
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
      }}
    >
      <img src={van.imageUrl} alt="van" width={"100px"} />
      <img src={van.imageUrl} alt="van" width={"100px"} />
    </div>
  );
}
