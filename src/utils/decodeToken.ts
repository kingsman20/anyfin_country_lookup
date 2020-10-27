import dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
// dotenv.config(); 
dotenv.config({ path: "../.env" });

async function decodeToken(token: string) {
  if (token) {
    try {
      const secret = process.env.JWT_SECRET || '';
      const verifiedToken = jwt.verify(token, secret);

      const user = verifiedToken;
      return user;
    } catch (err) {
      return undefined;
    }
  } else {
    return undefined;
  }
}

export default decodeToken;
