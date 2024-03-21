import {
  Select,
  SelectItem,
  SelectLabel,
  SelectPopover,
  SelectProvider,
} from "@ariakit/react";
import "@/styles/formStyles.css";

const CountryFilters = () => {
  return (
    <div>
      <SelectProvider>
        <SelectLabel className="text-[#6C727F] text-xs font-bold mb-2">
          Sort by
        </SelectLabel>
        <Select className="flex items-center justify-between w-full text-[#D2D5DA] border-[2px] border-[#282B30] rounded-xl p-3 text-sm font-semibold" />
        <SelectPopover
          gutter={3}
          sameWidth
          className="bg-[#1B1D1F] text-[#D2D5DA] text-sm border-[2px] border-[#282B30] rounded-xl p-1"
        >
          <SelectItem value="Population" className="select-item" />
          <SelectItem value="Region" className="select-item" />
          <SelectItem value="Area (km2)" className="select-item" />
        </SelectPopover>
      </SelectProvider>
    </div>
  );
};

export default CountryFilters;
