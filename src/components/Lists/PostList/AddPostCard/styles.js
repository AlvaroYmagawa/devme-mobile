import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

// CUSTOM IMPORTS
import { colors } from '../../../../styles';
import Button from '../../../Button';

export const Container = styled.View`
 background: ${colors.primary};
  width: 100%;
  padding: 16px;
  elevation: 5;
  border-radius: 16px;
`;

export const ContainerTop = styled.View`
  flex-direction: row;
  border-style: solid;
  border-bottom-color: ${colors.primaryDark};
  border-bottom-width: 1px;
  padding-bottom: 8px;
  margin-bottom: 8px;
`;

export const ContainerBottom = styled.View`
  flex-direction: row;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: colors.opaquetText,
})`
  flex: 1;
  background: ${colors.primaryDark};
  padding: 8px 16px;
  border-radius: 24px;
  color:#fff;
`;

export const Avatar = styled.Image`
  height: 40px;
  width: 40px;
  margin-right: 8px;
  border-radius: 20px;
`;

export const CategoriesButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const PublishButton = styled(Button)`
  margin-left: auto;
  height: 30px;
  border-radius: 10px;
`;

export const Text = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.a};
  text-transform: uppercase;
`;

export const MiniText = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: ${colors.accent};
  text-transform: uppercase;
`;
