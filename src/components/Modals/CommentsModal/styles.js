import { StyleSheet } from 'react-native';

// CUSTOM IMPORTS
import { colors } from '../../../styles';

export const styles = StyleSheet.create({
  backdrop: {
    margin: 0,
    padding: 0,
  },
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    backgroundColor: colors.primaryDark,
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
    padding: 16,
    height: '90%',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    paddingBottom: 16,
  },
  title: {
    fontWeight: 'bold',
    color: colors.strongText,
    fontSize: 18,
    textTransform: 'uppercase',
  },
});
