import RetryIcon from "@/assets/retry.svg";

const Error = ({ retry }: { retry: () => void }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-[#6C727F] text-center text-lg font-medium">
        Something went wrong, try again
      </p>

      <button
        className="text-white text-sm font-medium py-2 px-6 bg-[#4E80EE] rounded-full flex items-center gap-2"
        onClick={retry}
      >
        <img src={RetryIcon} className="h-5 w-5" /> Retry
      </button>
    </div>
  );
};

export default Error;
