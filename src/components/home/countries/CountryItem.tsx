import { Country } from "@/types";
import { Link } from "react-router-dom";
import { classNames } from "../../../utils";

type Props = {
  country: Country;
  index: number;
};

const CountryItem = ({ country, index }: Props) => {
  return (
    <tr className="relative hover:bg-[#282B30]">
      <td className={classNames(index === 0 ? "pt-5" : "pt-2.5", "table-desc")}>
        <img
          src={country.flags.svg}
          alt={country.flags.alt}
          className="w-11 h-9 sm:w-16 sm:h-12 rounded-md object-cover"
        />
        <Link to={`/country/${country.cioc}`} className="absolute inset-0" />
      </td>
      <td className="table-desc">{country.name.common}</td>
      <td className="table-desc">
        {new Intl.NumberFormat().format(country.population)}
      </td>
      <td className="table-desc">
        {new Intl.NumberFormat().format(country.area)}
      </td>
      <td className="table-desc hidden lg:block">{country.region}</td>
    </tr>
  );
};

export default CountryItem;
