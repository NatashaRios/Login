import { colors } from '@/constants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: colors.softRose,
    marginVertical: 20,
    width: '100%',
  },
  border: {
    borderWidth: 1,
    borderColor: colors.blush,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.wineRed,
  },
});
