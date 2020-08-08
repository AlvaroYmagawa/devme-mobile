import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

// CUSTOM IMPORTS
import { Container, Title } from './styles';

const Button = ({ children, isLoading, ...rest }) => (
  <Container {...rest}>
    {isLoading
      ? <ActivityIndicator size="small" color="#000" />
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
