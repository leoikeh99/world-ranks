import { Country } from "@/types";

const MainInfo = ({ country }: { country: Country }) => {
  return (
    <div className="flex flex-col gap-8 items-center pb-12 px-2">
      <img
        src={country.flags.svg}
        alt={country.flags.alt}
        className="h-24 w-36 xxs:h-32 xxs:w-48 sm:h-40 sm:w-60 object-cover rounded-lg -mt-12"
      />
      <div>
        <h1 className="text-2xl text-[#D2D5DA] font-semibold text-center">
          {country.name.common}
        </h1>
        <p className="text-[#D2D5DA] text-sm font-semibold text-center">
          {country.name.official}
        </p>
      </div>
      <div className="xs:flex items-center gap-8">
        <div className="flex justify-center mb-2 xs:mb-0 bg-[#282B30] p-2 rounded-xl">
          <p className="text-[#D2D5DA] text-xs font-semibold p-2 pr-4 border-r border-r-[#1B1D1F]">
            Population
          </p>
          <p className="text-[#D2D5DA] text-xs font-semibold p-2 pl-4">
            {country.population &&
              Intl.NumberFormat().format(country.population)}
          </p>
        </div>
        <div className="flex justify-center bg-[#282B30] p-2 rounded-xl">
          <p className="text-[#D2D5DA] text-xs font-semibold p-2 pr-4 border-r border-r-[#1B1D1F]">
            Area(km<sup>2</sup>)
          </p>
          <p className="text-[#D2D5DA] text-xs font-semibold p-2 pl-4">
            {country.area && Intl.NumberFormat().format(country.area)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
