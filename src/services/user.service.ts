import { conflictError } from '../errors/conflictError';
import * as userRepository from '../repositories/user.repository';
import bcrypt from 'bcrypt';

export async function CreateUser(
  email: string,
  password: string,
  name: string
) {
  const existentUser = await userRepository.findUserByEmail(email);
  if (existentUser) {
    throw conflictError('Email já cadastrado!');
  }
  const hashPassword = bcrypt.hashSync(password, 10);
  return await userRepository.CreateUser(email, hashPassword, name);
}
