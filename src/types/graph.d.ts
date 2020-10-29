export const typeDefs = ["type Query {\n  countries(code: String): [Country!]!\n  currencies(symbols: String): Currency!\n}\n\ntype Country {\n  name: String!\n  population: Int!\n  flag: String!\n  alpha2Code: String!\n}\n\ntype Currency {\n  base: String!\n  rates: Rate!\n}\n\ntype Rate {\n  SEK: String\n}\n\ntype User {\n  id: ID!\n  email: String!\n  token: String!\n}\n\ntype Mutation {\n  LoginUser(email: String!, password: String!): User!\n}\n"];
/* tslint:disable */

export interface Query {
  countries: Array<Country>;
  currencies: Currency;
}

export interface CountriesQueryArgs {
  code: string | null;
}

export interface CurrenciesQueryArgs {
  symbols: string | null;
}

export interface Country {
  name: string;
  population: number;
  flag: string;
  alpha2Code: string;
}

export interface Currency {
  base: string;
  rates: Rate;
}

export interface Rate {
  SEK: string | null;
}

export interface Mutation {
  LoginUser: User;
}

export interface LoginUserMutationArgs {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  token: string;
}
