import { colors } from '@/constants';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles';

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.blush} />
    </View>
  );
};
