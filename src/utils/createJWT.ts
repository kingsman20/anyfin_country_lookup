import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config({ path: "../.env" });

const createJWT = (id: string): string => {
  const secret = process.env.JWT_SECRET || '';
  const token = jwt.sign({ id }, secret, { expiresIn: '1d' });
  return token;
};

export default createJWT;
