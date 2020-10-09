import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

// CUSTOM IMPORTS
import { colors } from '../../../styles';
import Button from '../../Button';

export const Container = styled.View`
  width: 100%;
  background: ${colors.primary};
  padding: 16px;
  elevation: 5;
  border-radius: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

export const HeaderLeft = styled.View`
  flex: 1;
`;

export const UserName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.strongText};
`;

export const CreatedAt = styled.Text`
  font-size: 12px;
  color: ${colors.opaquetText};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.strongText};
`;

export const Categories = styled.View`
   flex-direction: row;
   margin-top: 4px;
`;

export const Category = styled.Text`
  color: ${colors.primary};
  font-size: 10px;
  padding: 4px 8px;
  background: ${colors.accent};
  border-radius: 24px;
  margin-right: 4px;
  elevation: 5;
`;

export const Description = styled.Text`
  font-size: 14px;
  color: ${colors.text};
  margin-top: 8px;
`;

export const Footer = styled.View`
  margin-top: 24px;
  flex-direction: row;
  align-items: center;
`;

export const CommentButton = styled(RectButton)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  height: 100%;
  padding: 8px;
`;

export const CommentButtonText = styled.Text`
  font-weight: bold;
  color: ${colors.text};
  margin-left: 8px;
`;

export const HelpButton = styled(Button)`
`;
