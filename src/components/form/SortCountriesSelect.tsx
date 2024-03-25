import {
  Select,
  SelectItem,
  SelectLabel,
  SelectPopover,
  SelectProvider,
} from "@ariakit/react";
import "@/styles/formStyles.css";
import { useSearchParams } from "react-router-dom";
import { SORTS } from "@/constants";

const SortCountriesSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortValue = searchParams.get("sort");

  const handleSelectChange = (value: string) => {
    setSearchParams((prevParams) => {
      prevParams.set("sort", value);
      return prevParams;
    });
  };

  return (
    <div>
      <SelectProvider
        value={
          SORTS.includes(sortValue ?? "Population")
            ? !sortValue
              ? "Population"
              : sortValue.charAt(0).toUpperCase() + sortValue.slice(1)
            : "Population"
        }
        setValue={handleSelectChange}
      >
        <SelectLabel className="label">Sort by</SelectLabel>
        <Select className="select-button" />
        <SelectPopover gutter={3} sameWidth className="select-popover">
          <SelectItem value="population" className="select-item">
            Population
          </SelectItem>
          <SelectItem value="region" className="select-item">
            Region
          </SelectItem>
          <SelectItem value="area" className="select-item">
            Area
          </SelectItem>
        </SelectPopover>
      </SelectProvider>
    </div>
  );
};

export default SortCountriesSelect;
