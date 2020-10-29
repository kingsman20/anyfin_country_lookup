import { getGraphQLRateLimiter } from 'graphql-rate-limit';
import fetch from 'node-fetch';
import {
  CountriesQueryArgs,
  Country,
  CurrenciesQueryArgs,
} from '../../types/graph';
import privateResolver from '../../utils/privateResolver';

const countryBaseURL = 'https://restcountries.eu/rest/v2';
const exchangeRateBaseURL = 'http://data.fixer.io/api';
// http://data.fixer.io/api/latest?access_key=de6f611b0b1cf6021e1647a473b9cfd1&base=EUR&symbols=SEK

const rateLimiter = getGraphQLRateLimiter({ identifyContext: (ctx) => ctx.id });

const resolvers = {
  Query: {
    countries: privateResolver(
      async (
        parent,
        args: CountriesQueryArgs,
        context,
        info
      ): Promise<[Country]> => {
        const { code } = args;
        const errorMessage = await rateLimiter(
          { parent, args, context: context.tokenStr, info },
          { max: 30, window: '60s' }
        );
        if (errorMessage) throw new Error(errorMessage);

        const response = await fetch(`${countryBaseURL}/alpha?codes=${code}`);
        const responseData = await response.json();
        return responseData;
      }
    ),

    currencies: privateResolver(
      async (parent, args: CurrenciesQueryArgs, context, info) => {
        const symbols = args;
        const errorMessage = await rateLimiter(
          { parent, args, context: context.tokenStr, info },
          { max: 30, window: '60s' }
        );
        if (errorMessage) throw new Error(errorMessage);

        const response = await fetch(
          `${exchangeRateBaseURL}/latest?access_key=${process.env.ACCESS_KEY}&base=EUR&symbols=${symbols.symbols}`
        );
        const responseData = await response.json();
        return responseData;
      }
    ),
  },
};

export default resolvers;
