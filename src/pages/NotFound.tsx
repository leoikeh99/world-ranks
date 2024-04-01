import { Link } from "react-router-dom";
import ChevronLeft from "@/assets/chevron-left.svg";

function NotFound() {
  return (
    <div className="sm:max-w-[min(700px,95%)] mx-auto sm:pb-5">
      <div className="bg-[#1B1D1F] sm:border border-[#282B30] sm:rounded-xl sm:-mt-12">
        <div className="flex flex-col items-center justify-center gap-7 py-5 px-2">
          <p className="text-4xl">😟</p>
          <h1 className="text-2xl text-[#D2D5DA] font-semibold">
            Oops, invalid page
          </h1>
          <Link
            to="/"
            className="text-white text-sm font-medium py-2 px-6 bg-[#4E80EE] rounded-full flex items-center gap-2"
          >
            <img src={ChevronLeft} className="h-5 w-5" /> Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
