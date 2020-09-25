import { StyleSheet, Dimensions } from 'react-native';

import { colors } from '../../../styles';

const dimensions = Dimensions.get('window');

export const styles = StyleSheet.create({
  backdrop: {
    margin: 0,
    padding: 0,
  },

  container: {
    width: dimensions.width,
    height: dimensions.height * 0.6,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    padding: 24,
    paddingTop: 80,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    elevation: 5,
    backgroundColor: colors.primaryDark,
  },

  imagePicker: {
    position: 'absolute',
    top: -50,
  },

  form: {
    width: dimensions.width,
    paddingHorizontal: 16,
  },

  input: {
    marginTop: 4,
  },

  fieldset: {
    marginTop: 16,
  },

  label: {
    color: colors.text,
    fontWeight: 'bold',
  },

  button: {
    marginTop: 56,
    borderRadius: 16,
    height: 56,
    justifyContent: 'center',
    backgroundColor: colors.accent,
  },

  buttonText: {
    color: colors.primaryDark,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
});
