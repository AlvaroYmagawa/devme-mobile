import { StyleSheet } from 'react-native';

// CUSTOM IMPORTS
import { colors } from '../../../../styles';

export const styles = StyleSheet.create({
  backdrop: {
    paddingHorizontal: 24,
  },
  container: {
    backgroundColor: colors.primaryDark,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  options: {
    flexDirection: 'column',
  },
  commentFieldset: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
  },
  text: {
    fontSize: 18,
    color: colors.text,
    marginRight: 16,
  },
});
