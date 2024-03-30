import { Link } from "react-router-dom";
import Retry from "@/assets/retry.svg";
import ChevronLeft from "@/assets/chevron-left.svg";

type Props = {
  error: { type: "error" | "not_found"; message: string };
  retry: () => void;
};

const index = ({ error, retry }: Props) => {
  return (
    <div className="flex flex-col items-center gap-5 py-10">
      <p className="text-[#6C727F] text-center text-lg font-medium">
        {error.message}
      </p>

      {error.type === "error" ? (
        <button
          className="text-white text-sm font-medium py-2 px-6 bg-[#4E80EE] rounded-full flex items-center gap-2"
          onClick={retry}
        >
          <img src={Retry} className="h-5 w-5" /> Retry
        </button>
      ) : (
        <Link
          to="/"
          className="text-white text-sm font-medium py-2 px-6 bg-[#4E80EE] rounded-full flex items-center gap-2"
        >
          <img src={ChevronLeft} className="h-5 w-5" /> Back to home
        </Link>
      )}
    </div>
  );
};

export default index;
