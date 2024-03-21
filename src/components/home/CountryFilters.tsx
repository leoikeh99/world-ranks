import ChooseRegions from "../form/ChooseRegions";
import SortCountriesSelect from "../form/SortCountriesSelect";

const CountryFilters = () => {
  return (
    <div className="grid gap-10">
      <SortCountriesSelect />
      <ChooseRegions />
    </div>
  );
};

export default CountryFilters;
