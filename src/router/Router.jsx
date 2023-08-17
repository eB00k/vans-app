import React from "react";
import "../server"; // mock server
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Vans, { loader as vansLoader } from "../pages/vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "../pages/vans/VanDetail";
import NotFound from "../pages/notFound/NotFound";
import Layout from "../components/layouts/Layout";
import Income from "../pages/host/Income";
import Dashboard from "../pages/host/Dashboard";
import Reviews from "../pages/host/Reviews";
import HostLayout from "../components/layouts/HostLayout";
import HostVans from "../components/host-page/HostVans";
import HostVanDetail from "../components/host-page/HostVanDetail";
import Detail from "../components/host-page/Detail";
import Pricing from "../components/host-page/Pricing";
import Photos from "../components/host-page/Photos";
import Error from "../components/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="vans"
        element={<Vans />}
        loader={vansLoader}
        errorElement={<Error />}
      />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        loader={vanDetailLoader}
        errorElement={<Error />}
      />

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="vans" element={<HostVans />} />
        <Route path="vans/:vanId" element={<HostVanDetail />}>
          <Route index element={<Detail />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="photos" element={<Photos />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function Router() {
  return <RouterProvider router={router} />;
}
