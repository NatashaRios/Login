import { colors } from '@/constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '100%',
    color: colors.blush,
    marginVertical: 10,
    shadowColor: colors.blush,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    backgroundColor: colors.wineRed,
    borderRadius: 10,
    paddingLeft: 10,
  },
});
