import React from "react";
import "./about.scss";
import bgImg from "../../assets/image 55.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="about-container">
      <img src={bgImg} alt="back" className="about-hero-img" />
      <div className="about-content">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="about-cta">
        <h2>Your destination is waiting. Your van is ready.</h2>
        <Link className="link-button" to="/vans">
          Expolore our vans
        </Link>
      </div>
    </div>
  );
}
