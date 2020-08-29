import React from 'react';
import { Ionicons } from '@expo/vector-icons';

// CUSTOM IMPORTS
import { Container, Message } from './styles';

const ErrorTip = ({
  error, showTip, setShowTip, ...rest
}) => (
  <Container {...rest}>
    <Ionicons name="md-alert" size={24} color="red" onPress={() => setShowTip(!showTip)} />
  </Container>
);

export default ErrorTip;
