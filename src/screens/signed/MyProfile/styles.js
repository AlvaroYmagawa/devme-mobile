import styled from 'styled-components/native';

// CUSTOM IMPORTS
import { colors } from '../../../styles';
import Categories from '../../../components/Lists/CategoryList';
import Button from '../../../components/Button';

export const Container = styled.View`
  padding: 0 16px;
  height: 100%;
  flex-direction: row;
  align-items: flex-end;
  position: relative;
`;

export const Scroll = styled.ScrollView`
  padding: 0 16px 16px 16px;
`;

export const Card = styled.View`
  position: relative;
  width: 100%;
  height: 85%;
  padding-top: 60px;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;
  elevation: 5;
  background: ${colors.primary};
`;

export const EditButton = styled(Button)`
  margin: 24px 0;
`;

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  height: 45px;
  flex-direction: row;
  align-items: center;
  border-style: solid;
  border-bottom-color: ${colors.primary};
  border-bottom-width: 1px;
`;

export const HeaderTitle = styled.Text`
  color: ${colors.strongText};
  font-weight: bold;
  font-size: 16px;
`;

export const Avatar = styled.Image`
  position: absolute;
  top: -60px;
  height: 120px;
  width: 120px;
  align-self: center;
  border-radius: 60px;
  elevation: 5;
  border: 3px solid ${colors.accent};
`;

export const Fieldset = styled.View`
   margin-top: 24px;
`;

export const FieldsetTitle = styled.Text`
  color: ${colors.strongText};
  font-weight: bold;
  margin-bottom: 4px;
`;

export const UserName = styled.Text`
  color: ${colors.strongText};
  font-weight: bold;
  font-size: 18px;
  align-self: center;
  margin-top: 12px;
`;

export const Role = styled.Text`
  font-size: 12px;
  color: ${colors.opaquetText};
  align-self: center;
`;

export const Bio = styled.Text`
  color: ${colors.text};
  font-size: 14px;
`;

export const FieldsetKnowledges = styled.View`
  margin-top: 24px;
  align-items: center;
  border-style: solid;
  border-bottom-color: ${colors.primaryDark};
  border-bottom-width: 1px;
  padding-bottom: 24px;
`;

export const Knowledges = styled(Categories)``;

export const ExitButton = styled.TouchableOpacity`
  position: absolute;
  flex-direction: row;
  align-items: center;
  top: 0;
  right: 0;
  margin: 24px;
`;

export const ExitButtonText = styled.Text`
  font-size: 12px;
  color: ${colors.text};
  margin-right: 8px;
`;
