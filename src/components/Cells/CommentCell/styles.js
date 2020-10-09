import styled from 'styled-components/native';

// CUSTOM IMPORTS
import { colors } from '../../../styles';

export const Container = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const RigthWrapper = styled.View`
    flex: 1;
`;

export const MessageCard = styled.View`
  border-radius: 16px;
  background-color: ${colors.primary};
  padding: 12px;
  margin-left: 8px;
`;

export const Message = styled.Text`
  color: ${colors.text};
`;

export const Name = styled.Text`
  font-weight: bold;
  color: ${colors.strongText};
  margin-right: 16px;
`;

export const CreatedAt = styled.Text`
  margin-left: 18px;
  margin-top: 4px;
  color: ${colors.opaquetText};
  font-size: 12px;
`;
