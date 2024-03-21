import { Checkbox } from "@ariakit/react";
import { useState } from "react";
import { REGIONS } from "@/constants";

const ChooseRegions = () => {
  const [checkboxValues, setCheckboxValues] = useState<string[]>(["Americas"]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (checkboxValues.includes(value)) {
      setCheckboxValues(checkboxValues.filter((item) => item !== value));
    } else {
      setCheckboxValues([...checkboxValues, value]);
    }
  };
  return (
    <div>
      <label className="label">Region</label>
      <div className="choose-regions">
        {REGIONS.map((region) => (
          <span key={region} className="inline-block">
            <Checkbox
              id={region}
              value={region}
              className="checkbox"
              checked={checkboxValues.includes(region)}
              onChange={handleChange}
            />
            <label htmlFor={region}>{region}</label>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ChooseRegions;
