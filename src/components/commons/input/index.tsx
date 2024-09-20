import React, { FC } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './styles';
import { colors } from '@/constants/colors';

interface IProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const Input: FC<IProps> = ({
  placeholder,
  value,
  onChangeText,
  textContentType,
  secureTextEntry,
}) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={colors.softRose}
      value={value}
      onChangeText={onChangeText}
      accessibilityRole='search'
      accessible={true}
      textContentType={textContentType}
      secureTextEntry={secureTextEntry}
    />
  );
};
