import styled from 'styled-components/native';

// CUSTOM IMPORTS
import { colors } from '../../../styles';

export const Container = styled.View`
  margin-right: 8px;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.TouchableOpacity`
  height: 64px;
  width: 64px;
  background: ${(props) => (props.accentTheme ? colors.accent : colors.primary)};
  border-radius: 40px;
  margin: 4px;
  elevation: 5;
  justify-content: center;
  align-items: center;
`;

export const Name = styled.Text`
  margin-top: 4px;
  font-size: 10px;
  font-weight: bold;
  color: ${(props) => (props.isPress ? colors.accent : colors.text)};
`;
