import "@/styles/formStyles.css";
import { Checkbox } from "@ariakit/react";
import { useSearchParams } from "react-router-dom";

const ChooseStatus = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const checked = event.target.checked;

    setSearchParams(
      (prevParams) => {
        prevParams.set(name, checked ? "true" : "false");
        return prevParams;
      },
      { replace: true }
    );
  };

  return (
    <div>
      <label className="label">Status</label>
      <div className="choose-status mt-3">
        <span className="block mb-3">
          <label htmlFor="unMember">
            Member of the United Nations
            <Checkbox
              id="unMember"
              name="unMember"
              checked={searchParams.get("unMember") === "true"}
              className="checkbox"
              onChange={handleCheck}
            />
            <span />
          </label>
        </span>
        <span className="block">
          <label htmlFor="independent">
            Independent
            <Checkbox
              id="independent"
              name="independent"
              checked={searchParams.get("independent") === "true"}
              className="checkbox"
              onChange={handleCheck}
            />
            <span />
          </label>
        </span>
      </div>
    </div>
  );
};

export default ChooseStatus;
