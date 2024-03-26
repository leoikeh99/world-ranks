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
          className="w-10 h-7 xxs:w-11 xxs:h-9 sm:w-16 sm:h-12 rounded-md object-cover"
        />
        <Link to={`/country/${country.cioc}`} className="absolute inset-0" />
      </td>
      <td className="table-desc">
        <p>{country.name.common}</p>
      </td>
      <td className="table-desc hidden xs:table-cell">
        <p>{new Intl.NumberFormat().format(country.population)}</p>
      </td>
      <td className="table-desc hidden xxs:table-cell">
        <p>{new Intl.NumberFormat().format(country.area)}</p>
      </td>
      <td className="table-desc hidden lg:table-cell">
        <p>{country.region}</p>
      </td>
    </tr>
  );
};

export default CountryItem;
