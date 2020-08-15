import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

// CUSTOM IMPORTS
import { Container, Title } from './styles';

const Button = ({
  children, isLoading, fontAwesomeIcon, ...rest
}) => (
  <Container {...rest}>

    {fontAwesomeIcon && (
    <FontAwesome
      name={fontAwesomeIcon}
      size={24}
      color="#fff"
      style={{ marginRight: 12 }}
    />
    ) }

    {isLoading
      ? <ActivityIndicator size="large" color="#fff" />
      : <Title>{children}</Title>}

  </Container>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  isLoading: false,
};

export default Button;
