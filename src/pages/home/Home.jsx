import React from "react";
import "./home.scss";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1>You got the travel plans, we got the travel vans</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
        dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aliquam dolores sed omnis rerum fuga!
      </p>
      <Link to="/vans">Find Your Vans</Link>
    </div>
  );
}
