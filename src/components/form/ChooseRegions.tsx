import {
  Checkbox,
  CheckboxProvider,
  Group,
  useCheckboxStore,
} from "@ariakit/react";
import { REGIONS } from "@/constants";

const ChooseRegions = () => {
  const checkbox = useCheckboxStore({ defaultValue: ["Americas"] });
  // const state = checkbox.useState();

  // useEffect(() => {
  //   console.log(state.value);
  // }, [state.value]);

  return (
    <div>
      <label className="label">Region</label>
      <CheckboxProvider store={checkbox}>
        <Group className="choose-regions">
          {REGIONS.map((region) => (
            <span key={region} className="inline-block">
              <Checkbox id={region} value={region} className="checkbox" />
              <label htmlFor={region}>{region}</label>
            </span>
          ))}
        </Group>
      </CheckboxProvider>
    </div>
  );
};

export default ChooseRegions;
