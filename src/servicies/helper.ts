import { IServerUser } from '@/interfaces';
import { IAuth } from './login/login';

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

export const users: IServerUser[] = [
  {
    id: 'it-drixit-1',
    avatar:
      'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png',
    email: 'it@drixit.com',
    password: 'some-password',
    name: 'IT',
    surname: 'Drixit',
    age: 25,
    role: 'admin',
  },
  {
    id: 'info-drixit-2',
    avatar:
      'https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png',
    email: 'info@drixit.com',
    password: 'other-password',
    name: 'Info',
    surname: 'Drixit',
    age: 30,
    role: 'user',
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
