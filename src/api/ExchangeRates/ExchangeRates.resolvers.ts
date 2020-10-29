import fetch from 'node-fetch';
import { CountriesQueryArgs, Country } from 'src/types/graph';
import privateResolver from '../../utils/privateResolver';

const countryBaseURL = 'https://restcountries.eu/rest/v2';

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
  },
};

export default resolvers;
