import React from "react";
import HostNavbar from "../host-page/HostNavbar";
import { Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <HostNavbar />
      <Outlet />
    </>
  );
}
