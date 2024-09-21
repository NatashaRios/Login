import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, User } from '@/screens';
import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

export type RootStackParamsList = {
  Login: undefined;
  User: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamsList>();

export const RootNavigation: FC = () => {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isAuth ? (
        <Stack.Screen name='User' component={User} />
      ) : (
        <Stack.Screen name='Login' component={Login} />
      )}
    </Stack.Navigator>
  );
};
