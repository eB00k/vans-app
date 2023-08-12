import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        padding: "2rem",
      }}
    >
      <h1> NotFound 404</h1>
      <h4
        onClick={() => navigate("/")}
        style={{
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        Go back to main page
      </h4>
    </div>
  );
}
