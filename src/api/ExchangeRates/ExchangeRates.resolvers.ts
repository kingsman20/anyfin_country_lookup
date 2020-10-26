import { CountriesQueryArgs, Country } from 'src/types/graph';

const resolvers = {
  Query: {
    countries: (_, args: CountriesQueryArgs): [Country] => {
      return [
        {
          id: '123',
          name: 'Test',
          population: 200,
          currencies: [
            {
              base: 'Eur',
              date: '12-12-2020',
              rates: [],
            },
          ],
        },
      ];
    },
  },
};

export default resolvers;
