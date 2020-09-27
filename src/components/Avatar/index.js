import React from 'react';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import { Image, View, StyleSheet } from 'react-native';

// CUSTOM IMPORTS
import { colors } from '../../styles';

const Avatar = ({
  size, style, source, iconSize, ...props
}) => {
  const styles = StyleSheet.create({
    avatar: {
      height: size, width: size, borderRadius: size, ...style,
    },
    noAvatar: {
      height: size,
      width: size,
      borderRadius: size,
      backgroundColor: colors.accent,
      justifyContent: 'center',
      alignItems: 'center',
      ...style,
    },
  });

  return source.uri ? (
    <Image
      style={styles.avatar}
      source={source}
      {...props}
    />
  ) : (
    <View style={styles.noAvatar}>
      <Ionicons name="md-person" size={iconSize || 24} color={colors.primaryDark} />
    </View>
  );
};

Avatar.propTypes = {
  size: PropTypes.number,
};

Avatar.defaultProps = {
  size: 40,
};

export default Avatar;
