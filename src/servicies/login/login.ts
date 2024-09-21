import Config from 'react-native-config';
import { validateCredentials } from '../helper';

export interface IAuth {
  email: string;
  password: string;
}

export interface IResponseLogin {
  jwt?: string;
  error?: string;
}

export const login = async (payload: IAuth): Promise<IResponseLogin> => {
  const url = `${Config.API_URL}/api/v0/authenticate`;
  const validCredential = validateCredentials(payload);
  try {
    if (typeof validCredential === 'object') {
      return { jwt: validCredential.token };
    } else {
      return { error: 'Email or password incorrect' };
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};
