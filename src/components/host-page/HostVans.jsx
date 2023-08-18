import HostService from "../../services/host.service";
import HostVansListCard from "./HostVansListCard";
import { useLoaderData } from "react-router-dom";
import { requireAuth } from "../../utils/requireAuth";

export async function loader() {
  await requireAuth();
  const fetchData = async () => {
    try {
      const data = await HostService.getHostVans();
      if (!data.length) throw new Error("There is no data");
      return data;
    } catch (err) {
      throw err;
    }
  };
  return fetchData();
}

export default function HostVans() {
  const hostVans = useLoaderData();

  return (
    <div className="host-page host-vans">
      <h2 className="host-vans-title">Your Listed Vans</h2>
      <div className="host-vans-list">
        {hostVans.map((van) => (
          <HostVansListCard van={van} key={van.id} />
        ))}
      </div>
    </div>
  );
}
