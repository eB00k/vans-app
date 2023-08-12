import React from "react";
import "../server"; // mock server
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Vans from "../pages/vans/Vans";
import VanDetail from "../pages/vans/VanDetail";
import NotFound from "../pages/notFound/NotFound";
import Layout from "../components/layouts/Layout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
