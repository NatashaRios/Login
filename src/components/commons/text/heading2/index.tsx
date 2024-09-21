import React, { FC } from 'react';
import { Text, TextProps } from 'react-native';
import { styles } from './styles';

interface IProps extends TextProps {
  text: string;
  color?: string;
}

export const Heading2: FC<IProps> = ({ text, accessibilityLabel, color }) => {
  return (
    <Text
      style={[styles.text, { color }]}
      accessible={true}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole='text'
    >
      {text}
    </Text>
  );
};
