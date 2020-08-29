import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

// CUSTOM IMPORTS
import { Container, Title } from './styles';
import { colors } from '../../styles';

const Button = ({
  children, isLoading, fontAwesomeIcon, iconSize, ...rest
}) => (
  <Container {...rest}>

    {fontAwesomeIcon && (
    <FontAwesome
      name={fontAwesomeIcon}
      size={iconSize}
      color={colors.primary}
      style={{ marginRight: 12 }}
    />
    ) }

    {isLoading
      ? <ActivityIndicator size="large" color={colors.primary} />
      : <Title>{children}</Title>}

  </Container>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  iconSize: PropTypes.number,
  fontAwesomeIcon: PropTypes.string,
};

Button.defaultProps = {
  isLoading: false,
  iconSize: 24,
  fontAwesomeIcon: null,
};

export default Button;
