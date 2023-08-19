import HostService from "../../services/host.service";
import HostVansListCard from "./HostVansListCard";
import { useLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import { requireAuth } from "../../utils/requireAuth";

export async function loader({ request }) {
  await requireAuth(request);
  const fetchData = async () => {
    try {
      const promiseData = HostService.getHostVans();
      // if (!data.length) throw new Error("There is no data");
      return defer({ data: promiseData });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
  return fetchData();
}

export default function HostVans() {
  const promiseVans = useLoaderData();

  function returnElements(hostVans) {
    return (
      <div className="host-vans-list">
        {hostVans.map((van) => (
          <HostVansListCard van={van} key={van.id} />
        ))}
      </div>
    );
  }

  return (
    <div className="host-page host-vans">
      <h2 className="host-vans-title">Your Listed Vans</h2>
      <Suspense fallback={<h4>Loading...</h4>}>
        <Await resolve={promiseVans.data}>{returnElements}</Await>
      </Suspense>
    </div>
  );
}
