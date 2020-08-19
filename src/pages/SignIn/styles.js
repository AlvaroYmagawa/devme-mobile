import styled from 'styled-components/native';
import { Platform } from 'react-native';

// CUSTOM IMPORTS
import Button from '../../components/Button';
import Input from '../../components/Input';

import { colors } from '../../styles';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const Logo = styled.Image`
  width: 210;
  height: 40px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 72px;
`;

export const FormTitle = styled.Text`
  font-size: 20px;
  color: #f2f2f2;
  font-weight: bold;
  margin: 0 auto 16px auto;
`;

export const FormInput = styled(Input)``;

export const SubmitButton = styled(Button)`
  margin-top: 24px;
`;

export const Text = styled.Text`
  color: ${colors.text};
  font-size: 14px;
  margin-top: 32px;
`;

export const SignLink = styled.TouchableOpacity`
  margin-left: 4px;
`;

export const SignLinkText = styled.Text`
  color: ${colors.accent};
  font-weight: bold;
  font-size: 16px;
  margin-top: 16px;
  text-align: center;
`;
