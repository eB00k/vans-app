import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log("---------------------", error);
  return (
    <div
      style={{
        height: "78vh",
        color: "crimson",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {"Something went wrong!"}
    </div>
  );
}
