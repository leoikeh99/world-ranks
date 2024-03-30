import { Country } from "@/types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BorderCountriesLoader from "./loading/BorderCountriesLoader";
import BorderCountriesError from "./error/BorderCountriesError";

type BorderCountry = {
  name: Country["name"];
  flags: Country["flags"];
  cioc: Country["cioc"];
};

const NeighbouringCountries = ({ borders }: { borders: string[] }) => {
  const [countries, setCountries] = useState<BorderCountry[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getCountries = async (codes: string[]) => {
    setError(false);
    setLoading(true);
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${codes.join(
          ","
        )}&fields=name,flags,cioc`
      );
      if (!response.ok) {
        setError(true);
        setLoading(false);
        return;
      }
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (borders.length > 0) {
      getCountries(borders);
    }
  }, [borders]);

  return (
    <>
      <div className="p-5 pb-10">
        <p className="text-[#6C727F] text-sm font-medium mb-4">
          Neigbouring Countries
        </p>
        {loading ? (
          <BorderCountriesLoader />
        ) : error ? (
          <BorderCountriesError retry={() => getCountries(borders)} />
        ) : (
          <>
            {countries.length > 0 ? (
              <ul className="flex flex-wrap gap-3">
                {countries.map((country) => (
                  <li key={country.name.common}>
                    <Link to={`/country/${country.cioc}`} className="block">
                      <img
                        src={country.flags.svg}
                        alt={country.flags.alt}
                        className="w-16 h-11 object-cover rounded-sm"
                      />
                      <p className="text-[#D2D5DA] text-xs font-medium pt-1.5">
                        {country.name.common}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-[#6C727F] text-xs font-medium">None</p>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default NeighbouringCountries;
