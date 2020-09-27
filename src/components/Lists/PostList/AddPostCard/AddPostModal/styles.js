import { StyleSheet } from 'react-native';

// CUSTOM IMPORTS
import { colors } from '../../../../../styles';

export const styles = StyleSheet.create({
  backdrop: {
    margin: 0,
    padding: 16,
  },

  container: {
    backgroundColor: colors.primary,
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
    borderBottomColor: colors.primaryDark,
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
  textArea: {
    borderRadius: 8,
    backgroundColor: colors.primaryDark,
    color: colors.text,
    paddingVertical: 8,
    paddingHorizontal: 16,
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
  fieldset: {
    marginBottom: 8,
  },
  fieldsetTitle: {
    color: colors.text,
    marginBottom: 4,
    fontWeight: 'bold',
  },
});
