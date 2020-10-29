import fetch from 'node-fetch';
import {
  CountriesQueryArgs,
  Country,
  CurrenciesQueryArgs,
} from 'src/types/graph';
import privateResolver from '../../utils/privateResolver';

const countryBaseURL = 'https://restcountries.eu/rest/v2';
const exchangeRateBaseURL = 'http://data.fixer.io/api';
// http://data.fixer.io/api/latest?access_key=de6f611b0b1cf6021e1647a473b9cfd1&base=EUR&symbols=SEK

const resolvers = {
  Query: {
    countries: privateResolver(
      async (_, args: CountriesQueryArgs): Promise<[Country]> => {
        const { code } = args;
        const response = await fetch(`${countryBaseURL}/alpha?codes=${code}`);
        const responseData = await response.json();
        return responseData;
      }
    ),

    currencies: privateResolver(async (_, args: CurrenciesQueryArgs) => {
      const symbols = args;
      console.log(symbols);
      
      const response = await fetch(
        `${exchangeRateBaseURL}/latest?access_key=${process.env.ACCESS_KEY}&base=EUR&symbols=${symbols.symbols}`
      );
      const responseData = await response.json();
      console.log(responseData);
      
      
      return responseData;
    }),
  },
};

export default resolvers;
