import React from "react";
import { requireAuth } from "../../utils/requireAuth";

export async function loader({request}) {
  return await requireAuth(request);
}

export default function Income() {
  return <div className="host-page host-income">Income Section</div>;
}
