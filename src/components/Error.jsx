import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error.message);
  return (
    <div
      style={{
        height: "78vh",
        color: "crimson",
        display: "grid",
        placeItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <h1>!</h1>
        {error.message || "Something went wrong"}
      </div>
    </div>
  );
}
