import { FC } from 'react';
import { Image } from 'react-native';
import { styles } from './styles';
import { Spacer, Heading3 } from '@/components';
import { colors } from '@/constants';

interface IProps {
  avatar: string;
  name: string;
  years: string;
  email: string;
  role: string;
}

export const UserDetails: FC<IProps> = ({
  avatar,
  name,
  years,
  email,
  role,
}) => {
  return (
    <>
      <Image
        source={{ uri: avatar }}
        accessibilityRole='image'
        alt='avatar'
        style={styles.avatar}
      />
      <Spacer marginVertical={10} />
      <Heading3 text={name} accessibilityLabel={name} color={colors.softRose} />
      <Spacer marginVertical={5} />
      <Heading3
        text={years}
        accessibilityLabel={years}
        color={colors.softRose}
      />
      <Spacer marginVertical={5} />
      <Heading3
        text={email}
        accessibilityLabel={email}
        color={colors.softRose}
      />
      <Spacer marginVertical={5} />
      <Heading3 text={role} accessibilityLabel={role} color={colors.softRose} />
    </>
  );
};
