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
import Income, { loader as incomeLoader } from "../pages/host/Income";
import Dashboard, { loader as dashboardLoader } from "../pages/host/Dashboard";
import Reviews, { loader as reviewsLoader } from "../pages/host/Reviews";
import HostLayout from "../components/layouts/HostLayout";
import HostVans, {
  loader as hostVanLoader,
} from "../components/host-page/HostVans";
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "../components/host-page/HostVanDetail";
import Detail from "../components/host-page/Detail";
import Pricing from "../components/host-page/Pricing";
import Photos from "../components/host-page/Photos";
import Error from "../components/Error";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "../pages/login/Login";
import { requireAuth } from "../utils/requireAuth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
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
        <Route index element={<Dashboard />} loader={dashboardLoader} />
        <Route path="income" element={<Income />} loader={incomeLoader} />
        <Route path="reviews" element={<Reviews />} loader={reviewsLoader} />
        <Route
          path="vans"
          element={<HostVans />}
          loader={hostVanLoader}
          errorElement={<Error />}
        />
        <Route
          path="vans/:vanId"
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
          // errorElement={<Error />}
        >
          <Route
            index
            element={<Detail />}
            loader={async () => {
              return await requireAuth();
            }}
          />
          <Route
            path="pricing"
            element={<Pricing />}
            loader={async () => {
              return await requireAuth();
            }}
          />
          <Route
            path="photos"
            element={<Photos />}
            loader={async () => {
              return await requireAuth();
            }}
          />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default function Router() {
  return <RouterProvider router={router} />;
}
