import { Link, Outlet, useLoaderData, Await, defer } from "react-router-dom";
import { Suspense } from "react";
import { VanService } from "../../services/vans.service";
import VanNavigation from "./VanNavigation";
import { requireAuth } from "../../utils/requireAuth";

export async function loader({ request, params }) {
  await requireAuth(request);
  try {
    let promise = VanService.getVanById(params.vanId);
    // if (!data)
    //   throw new Error(
    //     `There is no van in your host with this ID: ${params.vanId}`
    //   );
    return defer({ data: promise });
  } catch (err) {
    throw err;
  }
}

export default function HostVanDetail() {
  const promiseCurVan = useLoaderData();

  function returnElements(currentVan) {
    return (
      <div className="host-van-detail-container">
        <div className="host-van-detail-box">
          <img src={currentVan.imageUrl} alt="van" />
          <div className="detail-info">
            <div className={`btn ${currentVan.type}`}>{currentVan.type}</div>
            <h2>{currentVan.name}</h2>
            <h4>
              ${currentVan.price}
              <small>/day</small>
            </h4>
          </div>
        </div>
        <VanNavigation id={currentVan.id} />
        <Outlet context={currentVan} />
      </div>
    );
  }

  return (
    <div className="host-page host-van-detail">
      <Link to=".." relative="path">
        {"<"}Back to all vans
      </Link>
      <Suspense fallback={<h4>Loading...</h4>}>
        <Await resolve={promiseCurVan.data}>{returnElements}</Await>
      </Suspense>
    </div>
  );
}
