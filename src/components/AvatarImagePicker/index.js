import React from 'react';
import PropTypes from 'prop-types';
import { Platform, Alert, ActivityIndicator } from 'react-native';
import * as ExpoImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

// ACTIONS
import { updateUserSuccessful } from '../../store/modules/user/actions';

// CUSTOM IMPORTS
import { colors } from '../../styles';
import {
  Container,
  ImagePreviewButton,
  styles,
  ImageLoader,
  CameraIcon,
} from './styles';
import Avatar from '../Avatar';

const AvatarImagePicker = ({ style, setAvatarUrl, initialValue }) => {
  const dispatch = useDispatch();

  // STATES
  const [image, setImage] = React.useState(initialValue || null);
  const [isUploading, setIsUploading] = React.useState(false);

  // FUNCTIONS
  const getPermission = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        Alert.alert(
          'Sorry, we need camera roll permissions to make this work!',
        );
      }
    }
  };

  const pickImage = async () => {
    getPermission();

    try {
      const result = await ExpoImagePicker.launchImageLibraryAsync({
        mediaTypes: ExpoImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);

        const update = {
          photoURL: result.uri,
        };

        dispatch(updateUserSuccessful({ update }));
      }

      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container style={style}>
      <ImagePreviewButton onPress={pickImage}>
        {isUploading ? (
          <ImageLoader>
            <ActivityIndicator size="large" color={colors.accent} />
          </ImageLoader>
        ) : (
          <Avatar style={styles.imagePreview} source={{ uri: image }} iconSize={70} />
        )}

        <CameraIcon>
          <MaterialIcons name="camera-alt" size={16} color={colors.primaryDark} />
        </CameraIcon>
      </ImagePreviewButton>
    </Container>
  );
};

AvatarImagePicker.propTypes = {
  style: PropTypes.any,
  setAvatarUrl: PropTypes.func,
  initialValue: PropTypes.string,
};

AvatarImagePicker.defaultProps = {
  style: null,
  setAvatarUrl: () => {},
  initialValue: null,
};

export default AvatarImagePicker;
