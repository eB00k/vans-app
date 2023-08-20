import React, { useMemo, Suspense } from "react";
import {
  Link,
  useLocation,
  useLoaderData,
  defer,
  Await,
} from "react-router-dom";
import { VanService } from "../../services/vans.service";
import "./vandetail.scss";

export function loader({ params }) {
  const fetchData = async () => {
    try {
      const promise = VanService.getVanById(params.id);
      return defer({ data: promise });
    } catch (err) {
      throw err;
    }
  };
  return fetchData();
}

export default function VanDetail() {
  const location = useLocation();
  const { state } = useMemo(() => location, [location]);
  const promiseVan = useLoaderData();

  const stateSearch = state?.search || "";
  const type = state?.type || "all";

  function returnElements(van) {
    return (
      <>
        <img src={van.imageUrl} alt="" />
        <div className={`type ${van.type}`}>{van.type}</div>
        <h2>{van.name}</h2>
        <div className="price">
          ${van.price}
          <small>/day</small>
        </div>
        <p>&nbsp;{van.description}</p>
        <div className="rent-btn btn">Rent this van</div>
      </>
    );
  }

  return (
    <div className="van-detail">
      <Link to={`../?${stateSearch}`} className="detail-back" relative="path">
        {"<"} Back to {type} vans
      </Link>
      <Suspense fallback={<h4>Loading...</h4>}>
        <Await resolve={promiseVan.data}>{returnElements}</Await>
      </Suspense>
    </div>
  );
}
