import MainInfo from "@/components/country/MainInfo";
import NeighbouringCountries from "@/components/country/NeighbouringCountries";
import OtherInfo from "@/components/country/OtherInfo";
import Loading from "@/components/country/loading";
import Error from "@/components/country/error";
import type { Country as _Country } from "@/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Country() {
  const { code } = useParams();
  const [country, setCountry] = useState<_Country | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<{
    type: "error" | "not_found";
    message: string;
  } | null>(null);

  const getCountry = async (code: string) => {
    setError(null);
    setLoading(true);
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${code}?fields=name,flags,region,subregion,population,area,borders,languages,capital,currencies`
      );
      if (!response.ok) {
        if (response.status === 404) {
          setError({ type: "not_found", message: "Country not found" });
        } else {
          setError({
            type: "error",
            message: "Oops something went wrong, try again.",
          });
        }
        setLoading(false);
        return;
      }
      const data = await response.json();
      document.title = `World Ranks | ${data.name.common}`;
      setCountry(data);
    } catch (error) {
      console.error(error);
      setError({
        type: "error",
        message: "Oops something went wrong, try again.",
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    getCountry(code!);
  }, [code]);

  return (
    <div className="sm:max-w-[min(700px,95%)] mx-auto sm:pb-5">
      <div className="bg-[#1B1D1F] sm:border border-[#282B30] sm:rounded-xl sm:-mt-12">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error={error} retry={() => getCountry(code!)} />
        ) : country ? (
          <>
            <MainInfo country={country} />
            <OtherInfo country={country} />
            <NeighbouringCountries borders={country.borders} />
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Country;
