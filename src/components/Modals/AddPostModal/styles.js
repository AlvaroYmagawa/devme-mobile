import { StyleSheet } from 'react-native';

// CUSTOM IMPORTS
import { colors } from '../../../styles';

export const styles = StyleSheet.create({
  backdrop: {
    margin: 0,
    padding: 16,
  },

  container: {
    backgroundColor: colors.primaryDark,
    borderRadius: 16,
    padding: 16,
  },
  title: {
    fontSize: 18,
    textTransform: 'uppercase',
    textAlign: 'center',
    color: colors.strongText,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    paddingBottom: 16,
    borderBottomColor: colors.primary,
    marginBottom: 16,
  },
  userName: {
    color: colors.strongText,
    fontWeight: 'bold',
  },
  avatar: {
    height: 47,
    width: 47,
    borderRadius: 30,
  },
  tag: {
    backgroundColor: colors.accent,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 10,
    color: colors.primary,
    elevation: 5,
    borderRadius: 24,
  },
});
