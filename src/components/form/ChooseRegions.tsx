import { Checkbox } from "@ariakit/react";
import { REGIONS } from "@/constants";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const ChooseRegions = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;

    const selectedRegions = searchParams.get("region")?.split(",") || [];

    setSearchParams((prevParams) => {
      prevParams.set(
        "region",
        selectedRegions.includes(name)
          ? selectedRegions.filter((region) => region !== name).join(",")
          : [...selectedRegions, name].join(",")
      );
      return prevParams;
    });
  };

  return (
    <div>
      <label className="label">Region</label>
      <div className="choose-regions">
        {REGIONS.map((region) => (
          <span key={region} className="inline-block">
            <Checkbox
              id={region}
              name={region}
              value={region}
              className="checkbox"
              onChange={handleCheck}
              checked={searchParams.get("region")?.split(",").includes(region)}
            />
            <label htmlFor={region}>{region}</label>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ChooseRegions;
