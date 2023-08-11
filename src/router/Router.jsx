import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "../App";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Header from "../components/layouts/Header";
import Vans from "../pages/vans/Vans";
import Footer from "../components/layouts/Footer";

export default function Router() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
