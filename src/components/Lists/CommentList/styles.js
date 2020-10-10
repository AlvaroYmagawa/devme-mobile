import styled from 'styled-components/native';

// CUSTOM IMPORTS
import { colors } from '../../../styles';

export const Container = styled.View`
  flex: 1;
`;

export const Comments = styled.FlatList`
  flex: 1;
`;

export const FieldsetInput = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 16px;
  border-top-width: 1px;
  border-color: ${colors.primary};
`;

export const SendButton = styled.TouchableOpacity`
  background-color: ${colors.accent};
  border-radius: 50px;
  margin-left: 8px;
  height: 48px;
  width: 48px;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  border-radius: 24px;
  width: 100%;
  color: ${colors.strongText};
  min-width: 48px;
  background: ${colors.primary};
  padding: 8px 16px;
`;
