import ChooseRegions from "../form/ChooseRegions";
import ChooseStatus from "../form/ChooseStatus";
import SortCountriesSelect from "../form/SortCountriesSelect";

const CountryFilters = () => {
  return (
    <div className="grid gap-10 w-full">
      <SortCountriesSelect />
      <ChooseRegions />
      <ChooseStatus />
    </div>
  );
};

export default CountryFilters;
