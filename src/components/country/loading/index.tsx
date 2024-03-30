import BorderCountriesLoader from "./BorderCountriesLoader";

const Loading = () => {
  return (
    <div>
      <div className="flex flex-col gap-8 items-center pb-12">
        <div className="h-24 w-36 xxs:h-32 xxs:w-48 sm:h-40 sm:w-60 rounded-lg -mt-12 animate-pulse bg-[#282B30]"></div>
        <div className="flex flex-col items-center">
          <div className="h-3 w-28 rounded-md bg-[#282B30] animate-pulse mb-1"></div>
          <div className="h-3 w-40 rounded-md bg-[#282B30] animate-pulse"></div>
        </div>
        <div className="xs:flex items-center gap-8">
          <div className="h-12 w-44 mb-2 xs:mb-0 rounded-xl bg-[#282B30] animate-pulse"></div>
          <div className="h-12 w-44 rounded-xl bg-[#282B30] animate-pulse"></div>
        </div>
      </div>
      <div className="border-t border-[#282B30]">
        <ul>
          {[...new Array(5)].map((_, index) => (
            <li
              key={index}
              className="border-b border-[#282B30] flex items-center justify-between px-5 py-7"
            >
              <p className="h-3 w-28 rounded-md bg-[#282B30] animate-pulse mb-1"></p>
              <p className="h-3 w-28 rounded-md bg-[#282B30] animate-pulse mb-1"></p>
            </li>
          ))}
        </ul>
      </div>
      <BorderCountriesLoader />
    </div>
  );
};

export default Loading;
