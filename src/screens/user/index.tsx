import { FC, useCallback } from 'react';
import { SafeAreaView, View } from 'react-native';
import { styles } from './styles';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';
import { RootStackParamsList } from '@/navigation';
import { Button, Heading2, Loader } from '@/components';
import { colors } from '@/constants';
import { useDispatch } from 'react-redux';
import { logout } from '@/redux';
import { useGetUser } from '@/servicies/hooks';
import { deleteToken } from '@/servicies/keychain/token';
import { UserDetails } from '@/components/user';

type NavigationProps = NativeStackScreenProps<RootStackParamsList, 'User'>;

export const User: FC<NavigationProps> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetUser();

  const handleLogout = useCallback(async () => {
    await deleteToken();
    dispatch(logout());
    navigation.navigate('Login');
  }, []);

  if (isLoading) return <Loader />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContent}>
        <Heading2
          text='Perfil'
          accessibilityLabel='Perfil'
          color={colors.blush}
        />
      </View>
      <View style={styles.content}>
        <UserDetails
          avatar={data!.avatar}
          name={`${data?.name} ${data?.surname}`}
          years={`${data?.age} years`}
          email={data!.email}
          role={`${data?.role} role`}
        />
        <View style={styles.buttonContent}>
          <Button
            title='Logout'
            accessibilityLabel='Logout'
            onPress={handleLogout}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
