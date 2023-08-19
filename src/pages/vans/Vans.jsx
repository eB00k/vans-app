import React from "react";
import { useEffect, useState, createContext, Suspense } from "react";
import { VanService } from "../../services/vans.service";
import FilterButtons from "../../components/vans-page/FilterButtons";
import VansCatalog from "../../components/vans-page/VansCatalog";
import "./van.scss";
import {
  useLoaderData,
  useSearchParams,
  Link,
  redirect,
  defer,
  Await,
} from "react-router-dom";

const FILTER_OPTIONS = {
  simple: false,
  luxury: false,
  rugged: false,
};

export function loader() {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    throw redirect("/login");
  }
  const fetchDB = async () => {
    try {
      const responsePromise = VanService.getVans();
      return defer({ allVans: responsePromise });
    } catch (err) {
      throw err;
    }
  };
  return fetchDB();
}

export const SearchParamsContext = createContext(null);

export default function Vans() {
  const [filters, setFilters] = useState(FILTER_OPTIONS);
  const [searchParams, setSearchParams] = useSearchParams();
  const dataPromise = useLoaderData();

  const typeFilter = searchParams.getAll("type");

  useEffect(() => {
    handleUrlParams();
  }, []);

  function handleUrlParams() {
    if (!typeFilter) return;

    const updateFilters = {
      ...FILTER_OPTIONS,
      ...Object.fromEntries(typeFilter.map((val) => [val, true])),
    };
    setFilters(updateFilters);
  }

  function handleFilter(key, value) {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [value]: !prevFilters[value],
    }));

    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
        setFilters(FILTER_OPTIONS);
      } else {
        const valuesForKey = prevParams.getAll(key);

        if (valuesForKey.includes(value)) {
          const updatedValues = valuesForKey.filter((item) => item !== value);
          prevParams.delete(key);
          updatedValues.forEach((item) => {
            prevParams.append(key, item);
          });
        } else {
          prevParams.append(key, value);
        }
      }
      return prevParams;
    });
  }

  function renderElements(allVans) {
    const displayedVans = typeFilter
      ? allVans.filter((van) => filters[van.type])
      : allVans;

    return (
      <>
        <div className="vans-filter">
          <FilterButtons filters={filters} handleFilter={handleFilter} />
          {typeFilter && (
            <Link
              to="."
              className="clear-btn"
              onClick={() => handleFilter("type", null)}
            >
              Clear Filters
            </Link>
          )}
        </div>
        <VansCatalog vans={displayedVans.length ? displayedVans : allVans} />
      </>
    );
  }

  return (
    <SearchParamsContext.Provider
      value={{
        search: searchParams.toString(),
        type: searchParams.get("type"),
      }}
    >
      <div className="vans-container">
        <h2>Explore our van options</h2>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Await resolve={dataPromise.allVans}>{renderElements}</Await>
        </Suspense>
      </div>
    </SearchParamsContext.Provider>
  );
}
