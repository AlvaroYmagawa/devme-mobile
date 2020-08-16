import styled from 'styled-components/native';

// CUSTOM IMPORTS
import { colors } from '../../styles';

export const Container = styled.View`
   width: 100%;
  padding: 0 16px;
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

export const AvatarButton = styled.TouchableOpacity`
    margin-left: auto;
`;

export const Avatar = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 20px;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 21px;
`;
