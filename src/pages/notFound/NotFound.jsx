import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        padding: "2rem",
        height: "78vh",
        width: "100%",
        textAlign: "center"
      }}
    >
      <h1 style={{fontSize: "4rem"}}>404</h1>
      <h3>NotFound</h3>
      <h4
        onClick={() => navigate("/")}
        style={{
          textDecoration: "underline",
          cursor: "pointer",
          marginTop: "1rem"
        }}
      >
        Go back to main page
      </h4>
    </div>
  );
}
