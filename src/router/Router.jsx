import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Header from "../components/layouts/Header";
import Vans from "../pages/vans/Vans";
import Footer from "../components/layouts/Footer";
import VanDetail from "../pages/vanDetail//VanDetail";
import "../server"; // mock server

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VanDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
