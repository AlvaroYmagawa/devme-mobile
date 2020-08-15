import styled from 'styled-components/native';

// CUSTOM IMPORTS
import { colors } from '../../../styles';
import Button from '../../Button';

export const Container = styled.View`
  width: 100%;
  background: ${colors.primary};
  padding: 16px;
  elevation: 5;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

export const HeaderLeft = styled.View`
`;

export const Avatar = styled.Image`
  height: 40px;
  width: 40px;
  margin-right: 8px;
  border-radius: 20px;
`;

export const UserName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.text};
`;

export const CreatedAt = styled.Text`
  font-size: 12px;
  color: ${colors.opaquetText};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.text};
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

export const HelpButton = styled(Button)`
  margin-top: 24px;
`;
