import styled from 'styled-components/native';

// CUSTOM IMPORTS
import { colors } from '../../styles';

export const Container = styled.View``;

export const ImagePreviewButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 120px;
`;

export const ImagePreview = styled.Image`
  height: 120px;
  width: 120px;
  border-radius: 60px;
  border: 3px solid ${colors.primary};
`;

export const ImageLoader = styled.View`
  height: 100px;
  width: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: ${colors.whiteSmoke};
`;

export const CameraIcon = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background: ${colors.accent};
  height: 34px;
  width: 34px;
  border-radius: 17px;
  border: 2px solid ${colors.primaryDark};
  bottom: 0;
  right: 0;
`;
