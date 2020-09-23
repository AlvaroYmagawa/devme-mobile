import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 20,
    color: colors.strongText,
    fontWeight: 'bold',
  },
  strong: {
    marginLeft: 10,
    color: colors.accent,
  },
  description: {
    color: colors.text,
    fontSize: 14,
  },
  image: {
    height: 280,
    width: 260,
    marginBottom: 40,
  },
  input: {
    width: '100%',
    marginTop: 32,
  },
  button: {
    marginTop: 8,
  },
});
