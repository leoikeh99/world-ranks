import {
  Select,
  SelectItem,
  SelectLabel,
  SelectPopover,
  SelectProvider,
  useSelectStore,
} from "@ariakit/react";
import "@/styles/formStyles.css";

const SortCountriesSelect = () => {
  const store = useSelectStore({ defaultValue: "Population" });

  return (
    <div>
      <SelectProvider>
        <SelectLabel className="label">Sort by</SelectLabel>
        <Select store={store} className="select-button" />
        <SelectPopover
          store={store}
          gutter={3}
          sameWidth
          className="select-popover"
        >
          <SelectItem value="Population" className="select-item" />
          <SelectItem value="Region" className="select-item" />
          <SelectItem value="Area (km2)" className="select-item" />
        </SelectPopover>
      </SelectProvider>
    </div>
  );
};

export default SortCountriesSelect;
