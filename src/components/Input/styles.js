import styled, { css } from 'styled-components/native';

// CUSTOM IMPORTS
import { colors } from '../../styles';

export const Container = styled.View`
  elevation: 1000;
`;

export const Title = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${colors.accent};
`;

export const Fieldset = styled.View`
  margin-top: 4px;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  border-radius: 8px;
  background: ${colors.primary};
  border: 1.3px solid ${colors.primary};

  ${(props) => props.error
    && css`
      border-color: red;
    `};

  ${(props) => props.isFocused
    && css`
      border-color: ${colors.accent};
    `}
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: colors.text,
})`
  min-height: 48px;
  color: ${colors.whiteSmoke};
  flex: 1;
`;

export const EyeButton = styled.TouchableOpacity``;
