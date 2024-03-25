export type Filters = {
  search: string;
  regions: string[];
  sort: "population" | "area" | "region";
  unMember: boolean;
  independent: boolean;
};

export type Country = {
  name: { common: string };
  flags: { svg: string; alt: string; png: string };
  region: string;
  population: number;
  area: number;
  unMember: boolean;
  independent: boolean;
  cioc: string;
};
