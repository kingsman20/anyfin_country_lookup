export const typeDefs = ["type Query {\n  countries(name: String): [Country!]!\n  sayHello: String!\n}\n\ntype Country {\n  id: ID!\n  name: String!\n  population: Int!\n  currencies: [Currency!]!\n}\n\ntype Currency {\n  base: String!\n  date: String!\n  rates: [Rate!]!\n}\n\ntype Rate {\n  SEK: String!\n}\n"];
/* tslint:disable */

export interface Query {
  countries: Array<Country>;
  sayHello: string;
}

export interface CountriesQueryArgs {
  name: string | null;
}

export interface Country {
  id: string;
  name: string;
  population: number;
  currencies: Array<Currency>;
}

export interface Currency {
  base: string;
  date: string;
  rates: Array<Rate>;
}

export interface Rate {
  SEK: string;
}
