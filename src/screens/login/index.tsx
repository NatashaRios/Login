import { FC, useCallback, useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { Button, Heading1, Input, Loader, Text1 } from '@/components';
import { colors } from '@/constants';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamsList } from '@/navigation';
import { useDispatch } from 'react-redux';
import { login } from '@/redux';
import { useLogin } from '@/servicies/hooks';
import { users } from '@/servicies/users';
import debounce from 'lodash/debounce';

type NavigationProps = NativeStackScreenProps<RootStackParamsList, 'Login'>;

export const Login: FC<NavigationProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const { loginMutate, data, isPending } = useLogin();

  const validateEmail = (text: string): void => {
    const emailExists = users.some((user) => user.email === text);
    setIsValidEmail(emailExists);
  };

  const debouncedValidateEmail = useCallback(debounce(validateEmail, 500), []);

  const handleChangeEmail = (text: string): void => {
    setEmail(text);

    debouncedValidateEmail(text);
  };

  const handleChangePassword = (text: string): void => {
    setPassword(text);
  };

  const handleLoginPress = () => {
    loginMutate({ email, password });
  };

  useEffect(() => {
    if (data?.jwt) dispatch(login());
  }, [data]);
  if (isPending) return <Loader />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Heading1
          text='Log in to your account'
          accessibilityLabel='Log in to your account'
          color={colors.softRose}
        />
        <Input
          onChangeText={handleChangeEmail}
          placeholder='Email'
          accessibilityLabel='Email'
          value={email}
          textContentType='emailAddress'
        />
        {isValidEmail && (
          <Input
            onChangeText={handleChangePassword}
            placeholder='Password'
            accessibilityLabel='Password'
            value={password}
            textContentType='password'
            secureTextEntry
          />
        )}
        {data?.error && (
          <Text1
            text={data.error}
            accessibilityLabel={data.error}
            color={colors.hotPink}
          />
        )}
        <Button
          title='Login'
          accessibilityLabel='Login'
          onPress={handleLoginPress}
        />
      </View>
    </SafeAreaView>
  );
};
