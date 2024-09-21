import Config from 'react-native-config';
import { getToken } from '../keychain/token';
import { IServerUser } from '@/interfaces';
import { getUserByToken } from '../helper';

export const getUser = async (): Promise<IServerUser | undefined> => {
  const url = `${Config.API_URL}/api/v0/users/me`;
  const token = await getToken();

  try {
    return token ? getUserByToken(token) : undefined;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};
