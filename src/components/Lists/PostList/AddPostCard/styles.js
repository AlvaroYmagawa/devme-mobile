import styled from 'styled-components/native';

// CUSTOM IMPORTS
import { colors } from '../../../../styles';

export const Container = styled.View`
 background: ${colors.primary};
  width: 100%;
  padding: 16px;
  elevation: 5;
  border-radius: 16px;
  margin-bottom: 16px;
`;

export const ContainerTop = styled.View`
  flex-direction: row;
  border-style: solid;
  border-bottom-color: ${colors.primaryDark};
  border-bottom-width: 1px;
  padding-bottom: 16px;
  margin-bottom: 8px;
`;

export const ContainerBottom = styled.View`
  flex-direction: row;
`;

export const InputButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  flex: 1;
  background: ${colors.primaryDark};
  padding: 8px 16px;
  border-radius: 24px;
  flex-direction: row;
  align-items: center
`;

export const Text = styled.Text`
  color: ${colors.primary};
`;

export const Avatar = styled.Image`
  height: 40px;
  width: 40px;
  margin-right: 8px;
  border-radius: 20px;
`;
