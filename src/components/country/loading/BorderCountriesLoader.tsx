const BorderCountriesLoader = () => {
  return (
    <div className="p-5 pb-10">
      <ul className="flex flex-wrap gap-3">
        {[...new Array(4)].map((_, index) => (
          <li key={index}>
            <div className="w-16 h-11 rounded-sm animate-pulse bg-[#282B30] mb-1"></div>
            <p className="h-2 w-14 rounded-md bg-[#282B30] animate-pulse"></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BorderCountriesLoader;
