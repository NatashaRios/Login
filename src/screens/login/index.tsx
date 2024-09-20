import { FC, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { Button, Heading1, Input } from '@/components';
import { useLogin } from '@/servicies';

export const Login: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { loginMutate, data } = useLogin();

  const handleChangeEmail = (text: string): void => {
    setEmail(text);
  };

  const handleChangePassword = (text: string): void => {
    setPassword(text);
  };

  const handleLoginPress = () => {
    loginMutate({ email, password });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Heading1
          text='Log in to your account'
          accessibilityLabel='Log in to your account'
        />
        <Input
          onChangeText={handleChangeEmail}
          placeholder='Email'
          accessibilityLabel='Email'
          value={email}
          textContentType='emailAddress'
        />
        <Input
          onChangeText={handleChangePassword}
          placeholder='Password'
          accessibilityLabel='Password'
          value={password}
          textContentType='password'
          secureTextEntry
        />
        <Button
          title='Login'
          accessibilityLabel='Login'
          onPress={handleLoginPress}
        />
      </View>
    </SafeAreaView>
  );
};
