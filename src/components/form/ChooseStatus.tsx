import "@/styles/formStyles.css";
import { Checkbox } from "@ariakit/react";

const ChooseStatus = () => {
  return (
    <div>
      <label className="label">Status</label>
      <div className="choose-status mt-3">
        <span className="block mb-3">
          <label htmlFor="unMember">
            Member of the United Nations
            <Checkbox id="unMember" className="checkbox" />
            <span />
          </label>
        </span>
        <span className="block">
          <label htmlFor="independent">
            Independent
            <Checkbox id="independent" className="checkbox" />
            <span />
          </label>
        </span>
      </div>
    </div>
  );
};

export default ChooseStatus;
