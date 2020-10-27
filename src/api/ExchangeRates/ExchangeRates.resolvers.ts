import fetch from 'node-fetch';
import { CountriesQueryArgs, Country } from 'src/types/graph';
import privateResolver from '../../utils/privateResolver';

const countryBaseURL = 'https://restcountries.eu/rest/v2';

const resolvers = {
  Query: {
    countries: privateResolver(
      async (_, args: CountriesQueryArgs): Promise<[Country]> => {
        const { name } = args;
        const response = await fetch(`${countryBaseURL}/name/${name}`);
        const responseData = await response.json();
        //   console.log('responseData ', responseData);

        responseData.forEach((element) => {
          // console.log(element);
        });

        return responseData;
      }
    ),
  },
};

export default resolvers;
