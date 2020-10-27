import * as shortid from 'shortid';
import { LoginUserMutationArgs, User } from 'src/types/graph';
import createJWT from '../../utils/createJWT';

const resolvers = {
  Mutation: {
    // A dummy login endpoint that generates and returns a token with other details
    LoginUser: (_, args: LoginUserMutationArgs): User => {
      const id = shortid.generate();
      const token = createJWT(id);
      return {
        id,
        email: args.email,
        token,
      };
    },
  },
};

export default resolvers;
