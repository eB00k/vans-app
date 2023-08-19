import React from "react";
import { requireAuth } from "../../utils/requireAuth";

export async function loader({ request }) {
  return await requireAuth(request);
}

export default function Dashboard() {
  return (
  <div className="host-page host-dashboard">Dashboard</div>
  );
}
