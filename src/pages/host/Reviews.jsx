import React from "react";
import { requireAuth } from "../../utils/requireAuth";

export async function loader({ request }) {
  return await requireAuth(request);
}

export default function Reviews() {
  return <div className="host-page host-review">Reviews Section</div>;
}
