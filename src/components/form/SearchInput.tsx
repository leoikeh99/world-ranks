import { Form, FormInput, useFormStore } from "@ariakit/react";
import { useSearchParams } from "react-router-dom";

const SearchInput = () => {
  const form = useFormStore({ defaultValues: { search: "" } });
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSearchParams((prevParams) => {
      prevParams.set("search", value);
      return prevParams;
    });
  };
  return (
    <Form store={form}>
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-400 left-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <FormInput
          name={form.names.search}
          value={searchParams.get("search") || ""}
          onChange={handleInputChange}
          placeholder="Search by Name, Region, Subregion"
          className="search-input"
        />
      </div>
    </Form>
  );
};

export default SearchInput;
