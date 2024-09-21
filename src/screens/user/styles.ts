import { colors } from '@/constants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.deepWine,
  },
  titleContent: {
    marginTop: 20,
    marginLeft: 20,
  },
  content: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonContent: {
    flex: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
});
