import { Country } from "@/types";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../Pagination";
import CountryItem from "./CountryItem";
import Loading from "./Loading";

const Countries = ({
  countries,
  loading,
}: {
  countries: Array<Country>;
  loading: boolean;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const changePage = (selectedItem: { selected: number }) => {
    setSearchParams((prevParams) => {
      prevParams.set("page", (selectedItem.selected + 1).toString());
      return prevParams;
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getPage = (searchParams: URLSearchParams) => {
    const pageParams = searchParams.get("page");
    let page = isNaN(Number(pageParams))
      ? 1
      : pageParams
      ? Number(pageParams)
      : 1;

    const pageCount = Math.ceil(countries.length / 15);
    if (page > pageCount) page = pageCount;

    return page;
  };

  const paginatedCountries = useMemo(() => {
    const page = getPage(searchParams);
    return countries.slice((page - 1) * 15, page * 15);
  }, [searchParams.get("page"), countries]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="table-head">Flag</th>
            <th className="table-head">Name</th>
            <th className="table-head">Population</th>
            <th className="table-head">
              Area (km <sup>2</sup>)
            </th>
            <th className="table-head hidden lg:block">Region</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {!loading ? (
            <>
              {paginatedCountries.map((country, index) => (
                <CountryItem
                  key={country.name.common}
                  country={country}
                  index={index}
                />
              ))}
            </>
          ) : (
            <Loading />
          )}
        </tbody>
      </table>
      <Pagination
        pageCount={Math.ceil(countries.length / 15)}
        forcePage={getPage(searchParams) - 1}
        onPageChange={changePage}
      />
    </div>
  );
};

export default Countries;
