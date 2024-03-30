import { Country } from "@/types";

const OtherInfo = ({ country }: { country: Country }) => {
  return (
    <div className="border-t border-[#282B30]">
      <ul>
        <li className="border-b border-[#282B30] flex items-center justify-between px-5 py-7">
          <p className="text-[#6C727F] text-sm font-semibold">Capital</p>
          <p className="text-[#D2D5DA] text-sm font-semibold">
            {country.capital[0]}
          </p>
        </li>
        <li className="border-b border-[#282B30] flex items-center justify-between px-5 py-7">
          <p className="text-[#6C727F] text-sm font-semibold">Subregion</p>
          <p className="text-[#D2D5DA] text-sm font-semibold">
            {country.subregion}
          </p>
        </li>
        <li className="border-b border-[#282B30] flex items-center justify-between px-5 py-7">
          <p className="text-[#6C727F] text-sm font-semibold">Language</p>
          <p className="text-[#D2D5DA] text-sm font-semibold">
            {country.languages[Object.keys(country.languages)[0]]}
          </p>
        </li>
        <li className="border-b border-[#282B30] flex items-center justify-between px-5 py-7">
          <p className="text-[#6C727F] text-sm font-semibold">Currency</p>
          <p className="text-[#D2D5DA] text-sm font-semibold">
            {country.currencies[Object.keys(country.currencies)[0]].name}
          </p>
        </li>
        <li className="border-b border-[#282B30] flex items-center justify-between px-5 py-7">
          <p className="text-[#6C727F] text-sm font-semibold">Continents</p>
          <p className="text-[#D2D5DA] text-sm font-semibold">
            {country.region}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default OtherInfo;
