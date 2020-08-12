import styled from 'styled-components/native';
import { colors } from '../../styles';

export const Container = styled.View`
  padding: 0 16px;
  height: 56px;
  border-radius: 16px;
  background: ${colors.whiteSmoke};

  align-items: center;
  flex-direction: row;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: colors.text,
})`
  flex: 1;
  margin-left: 16px;
  color: #000;
`;
