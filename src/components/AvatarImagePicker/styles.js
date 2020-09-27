import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

// CUSTOM IMPORTS
import { colors } from '../../styles';

export const Container = styled.View``;

export const ImagePreviewButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 120px;
`;

export const styles = StyleSheet.create({
  imagePreview: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: colors.primaryDark,
  },
});

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
