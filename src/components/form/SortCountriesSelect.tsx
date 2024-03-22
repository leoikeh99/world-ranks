import {
  Select,
  SelectItem,
  SelectLabel,
  SelectPopover,
  SelectProvider,
} from "@ariakit/react";
import "@/styles/formStyles.css";
import { useSearchParams } from "react-router-dom";

const SortCountriesSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSelectChange = (value: string) => {
    setSearchParams((prevParams) => {
      prevParams.set("sort", value);
      return prevParams;
    });
  };

  return (
    <div>
      <SelectProvider
        value={searchParams.get("sort") ?? "Population"}
        setValue={handleSelectChange}
      >
        <SelectLabel className="label">Sort by</SelectLabel>
        <Select className="select-button" />
        <SelectPopover gutter={3} sameWidth className="select-popover">
          <SelectItem value="Population" className="select-item" />
          <SelectItem value="Region" className="select-item" />
          <SelectItem value="Area (km2)" className="select-item" />
        </SelectPopover>
      </SelectProvider>
    </div>
  );
};

export default SortCountriesSelect;
