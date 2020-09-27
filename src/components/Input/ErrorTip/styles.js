import styled from 'styled-components/native';

// CUSTOM IMPORTS
import { colors } from '../../../styles';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  position: relative;
  margin-left: 15px;
`;

export const Tip = styled.View`
  display: flex;
  justify-content: center;
  text-align: center;
  min-width: 200px;
  background: ${colors.error};
  padding: 8px;
  border-radius: 8px;
  elevation: 6;

  box-shadow: 0 2px 5px ${colors.black20};

  position: absolute;
  top: -24px;
  left: -170px;
`;

export const TipMessage = styled.Text`
  color: #fff;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
`;

export const TipView = styled.View`
  position: absolute;
  right: 16px;
  top: -2px;
  background: ${colors.error};
  height: 8px;
  width: 8px;
`;
