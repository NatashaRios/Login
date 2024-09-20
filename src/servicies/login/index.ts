import Config from 'react-native-config';

export interface IAuth {
  email: string;
  password: string;
}

export interface IResponseLogin {
  jwt: string;
}

export const login = async (
  payload: IAuth
): Promise<IResponseLogin | string> => {
  const url = `${Config.API_URL}/api/v0/authenticate`;

  try {
    if (
      payload.email === 'it@drixit.com' &&
      payload.password === 'some-password'
    ) {
      return { jwt: 'jwt-token' };
    } else {
      return 'Email or password incorrect';
    }

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'X-CMC_PRO_API_KEY': Config.API_KEY || '',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};
