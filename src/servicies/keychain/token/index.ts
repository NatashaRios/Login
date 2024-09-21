import * as SecureStore from 'expo-secure-store';

export const setToken = async (token: string): Promise<void> => {
  try {
    await SecureStore.setItemAsync('authToken', token);
  } catch (error) {
    throw error;
  }
};

export const getToken = async (): Promise<string | null> => {
  try {
    return await SecureStore.getItemAsync('authToken');
  } catch (error) {
    throw error;
  }
};

export const deleteToken = async (): Promise<void> => {
  try {
    await SecureStore.deleteItemAsync('authToken');
  } catch (error) {
    throw error;
  }
};
