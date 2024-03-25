import { REGIONS, SORTS } from "./constants";
import { Country, Filters } from "./types";

export function paramsToObject(entries: IterableIterator<[string, string]>) {
  const result: Record<string, string> = {};
  for (const [key, value] of entries) {
    // each 'entry' is a [key, value] tupple
    result[key] = value;
  }
  return result;
}

export function getFiltersObject(filters: Record<string, string>): Filters {
  return {
    search: filters.search ?? "",
    regions: filters.regions
      ? filters.regions
          .split(",")
          .filter((region: string) => REGIONS.some((r) => r === region))
      : [],
    sort:
      (filters.sort && filters.sort === "area") ||
      filters.sort === "population" ||
      filters.sort === "region"
        ? filters.sort
        : "population",
    unMember: filters.unMember === "true",
    independent: filters.independent === "true",
  };
}

export function filterCountries(filters: Filters, countries: Country[]) {
  let filtered = countries.sort((a, b) =>
    filters.sort !== "region"
      ? b[filters.sort] - a[filters.sort]
      : a.region.localeCompare(b.region)
  );

  // filter by region
  filtered = filtered.filter((country) => {
    return filters.regions.length === 0
      ? true
      : filters.regions.some((region) => country.region === region);
  });

  // filter by search
  filtered = filtered.filter((country) => {
    return (
      country.name.common
        .toLowerCase()
        .includes(filters.search.toLowerCase()) ||
      country.cioc.toLowerCase().includes(filters.search.toLowerCase())
    );
  });

  // filter by unMember status
  filtered = filtered.filter((country) =>
    !filters.unMember ? true : country.unMember === filters.unMember
  );

  // filter by independent status
  filtered = filtered.filter((country) =>
    !filters.independent ? true : country.independent === filters.independent
  );

  return filtered;
}

export function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}
