import Retry from "@/assets/retry.svg";

const BorderCountriesError = ({ retry }: { retry: () => void }) => {
  return (
    <div>
      <p className="text-[#6C727F] text-xs font-medium mb-1">
        Error retrieving neighbouring countries
      </p>
      <button
        className="text-white text-xs font-medium py-1 px-3 bg-[#4E80EE] rounded-full flex items-center gap-2"
        onClick={retry}
      >
        <img src={Retry} className="h-3 w-3" /> Retry
      </button>
    </div>
  );
};

export default BorderCountriesError;
