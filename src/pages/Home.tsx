import SearchInput from "@/components/form/SearchInput";
import CountryFilters from "@/components/home/CountryFilters";

function Home() {
  return (
    <div className="max-w-[95%] mx-auto">
      <div className="relative bg-[#1B1D1F] border border-[#282B30] -mt-12 rounded-xl py-5 px-8">
        <div className="flex items-center justify-between mb-10">
          <p className="text-[#6C727F] font-semibold">Found 234 countries</p>
          <SearchInput />
        </div>
        <div className="flex gap-6">
          <div className="basis-80">
            <CountryFilters />
          </div>
          <div className="w-full">Country table</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
