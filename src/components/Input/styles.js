import styled, { css } from 'styled-components/native';
import { colors } from '../../styles';

export const Container = styled.View`
  padding: 0 16px;
  height: 56px;
  border-radius: 16px;
  background: ${colors.primary};

  align-items: center;
  flex-direction: row;
  border-width: 2px;
  border-color: ${colors.primary}

  ${(props) => props.isFocused && css`
    border-color: ${colors.accent}
  `}

  ${(props) => props.error && css`
    border-color: red
  `}
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: colors.primaryDark,
})`
  flex: 1;
  margin-left: 16px;
  color: #fff;
`;

export const ErrorMessage = styled.Text`
  color: red;
`;
