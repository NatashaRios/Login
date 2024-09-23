import { IServerUser } from '@/interfaces';
import { IAuth } from './login';
import { users } from './users';

interface ICredential {
  email: string;
  password: string;
  token: string;
}

const credentials: ICredential[] = [
  { email: 'it@drixit.com', password: 'some-password', token: 'jwt-token-1' },
  {
    email: 'info@drixit.com',
    password: 'other-password',
    token: 'jwt-token-2',
  },
];

export const validateCredentials = (payload: IAuth): ICredential | string => {
  return (
    credentials.find(
      (credential) =>
        credential.email === payload.email &&
        credential.password === payload.password
    ) || 'Email or password incorrect'
  );
};

export const getUserByToken = (token: string): IServerUser | undefined => {
  const credential = credentials.find((cred) => cred.token === token);

  if (!credential) {
    return undefined;
  }

  const user = users.find((user) => user.email === credential.email);

  return user;
};
