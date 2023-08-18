import { Link, Outlet, useLoaderData } from "react-router-dom";
import HostService from "../../services/host.service";
import VanNavigation from "./VanNavigation";
import { requireAuth } from "../../utils/requireAuth";

export async function loader({ params }) {
  await requireAuth();
  const fetchData = async () => {
    try {
      let data = await HostService.getHostVanById(params.vanId);
      if (!data)
        throw new Error(
          `There is no van in your host with this ID: ${params.vanId}`
        );
      console.log(data);
      return data;
    } catch (err) {
      throw err;
    }
  };
  return fetchData();
}

export default function HostVanDetail() {
  const currentVan = useLoaderData();

  return (
    <div className="host-page host-van-detail">
      <Link to=".." relative="path">
        {"<"}Back to all vans
      </Link>
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
    </div>
  );
}
