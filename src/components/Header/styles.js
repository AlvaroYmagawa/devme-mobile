import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

// CUSTOM IMPORTS
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../styles';

export const Container = styled.View`
  width: 100%;
  padding: 0 16px;
`;

export const Title = styled.Text`
  font-size: 16px;
  text-transform: uppercase;
  color: ${colors.strongText};
  font-weight: bold;
`;

export const Content = styled.View`
  width: 100%;
  height: 45px;
  flex-direction: row;
  align-items: center;
  border-style: solid;
  border-bottom-color: ${colors.primary};
  border-bottom-width: 1px;
`;

export const RighArea = styled.View`
   margin-left: auto;
   flex-direction: row;
   align-items: center;
`;

export const SearchButton = styled(RectButton)`
  align-items: center;
  background: ${colors.background};
  border-radius: 15px;
  padding: 8px;
`;

export const MenuButton = styled(RectButton)`
  background: ${colors.background};
  padding: 8px;
  align-items: center;
  border-radius: 15px;
`;

export const SearchIcon = styled(MaterialIcons)``;

export const MenuIcon = styled(MaterialIcons)`
`;

export const AvatarButton = styled.TouchableOpacity`
  margin-left: 24px;
`;

export const Avatar = styled.Image`
  width: 26px;
  height: 26px;
  border-radius: 13px;
`;

export const Logo = styled.Image`
  width: 95px;
  height: 18px;
`;
