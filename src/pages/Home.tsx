import SearchInput from "@/components/form/SearchInput";
import CountryFilters from "@/components/home/CountryFilters";
import Error from "@/components/home/Error";
import Countries from "@/components/home/countries";
import "@/styles/homeStyles.css";
import { Country } from "@/types";
import { paramsToObject, getFiltersObject, filterCountries } from "@/utils";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [countries, setCountries] = useState<Array<Country>>([]);
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean>(false);
  const filters = getFiltersObject(paramsToObject(searchParams.entries()));

  const getCountries = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/all?fields=name,flags,region,population,area,unMember,independent,cioc`
      );
      const data = await response.json();
      setCountries(data);
      setError(false);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const filteredCountries = useMemo(
    () => filterCountries(filters, countries),
    [countries, filters]
  );

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div className="sm:max-w-[min(1270px,95%)] mx-auto pb-5">
      <div className="relative bg-[#1B1D1F] border border-[#282B30] sm:-mt-12 sm:rounded-xl py-5 px-8">
        <div className="sm:flex items-center justify-between mb-10">
          <p className="text-[#6C727F] font-semibold mb-3 sm:mb-0">
            Found {filteredCountries.length} countries
          </p>
          <SearchInput />
        </div>
        <div className="md:flex gap-6">
          <div className="basis-[22rem] mb-6 md:mb-0">
            <CountryFilters />
          </div>
          <div className="w-full">
            {!error ? (
              <Countries countries={filteredCountries} loading={loading} />
            ) : (
              <Error />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
