export const typeDefs = ["type Query {\n  countries(name: String): [Country!]!\n  sayHello: String!\n}\n\ntype Country {\n  name: String!\n  population: Int!\n  currencies: [Currency!]!\n}\n\ntype Currency {\n  base: String!\n  date: String!\n  rates: [Rate!]!\n}\n\ntype Rate {\n  SEK: String!\n}\n\ntype User {\n  id: ID!\n  email: String!\n  token: String!\n}\n\ntype Mutation {\n  LoginUser(email: String!, password: String!): User!\n}\n"];
/* tslint:disable */

export interface Query {
  countries: Array<Country>;
  sayHello: string;
}

export interface CountriesQueryArgs {
  name: string | null;
}

export interface Country {
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
