export type Filters = {
  search: string;
  regions: string[];
  sort: "population" | "area" | "region";
  unMember: boolean;
  independent: boolean;
};

export type Country = {
  name: { common: string; official: string };
  flags: { svg: string; alt: string; png: string };
  region: string;
  population: number;
  area: number;
  unMember: boolean;
  independent: boolean;
  cioc: string;
  borders: string[];
  languages: Record<string, string>;
  subregion: string;
  capital: string[];
  currencies: Record<string, { name: string; symbol: string }>;
};
