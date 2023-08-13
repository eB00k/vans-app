import React from "react";
import "../server"; // mock server
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Vans from "../pages/vans/Vans";
import VanDetail from "../pages/vans/VanDetail";
import NotFound from "../pages/notFound/NotFound";
import Layout from "../components/layouts/Layout";
import Income from "../pages/host/Income";
import Dashboard from "../pages/host/Dashboard";
import Reviews from "../pages/host/Reviews";
import HostLayout from "../components/layouts/HostLayout";
import HostVans from "../components/host-page/HostVans";
import VansItemLayout from "../components/layouts/VansItemLayout";
import HostVanDetail from "../components/host-page/HostVanDetail";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:vanId" element={<VansItemLayout />}>
              <Route index element={<HostVanDetail />} />
              {/* <Route path="pricing" el ement={<div>Pricing</div>}
               <Route path="photos" element={<div>Photos</div>} */}
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
