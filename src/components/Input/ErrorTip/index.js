import React from 'react';
import { Ionicons } from '@expo/vector-icons';

// CUSTOM IMPORTS
import {
  Container, Tip, TipMessage, TipView,
} from './styles';
import { colors } from '../../../styles';

const ErrorTip = ({ error, ...rest }) => {
  // STATES
  const [show, setShow] = React.useState(false);

  return (
    <Container {...rest} onPress={() => setShow(!show)}>
      <Ionicons name="md-alert" size={24} color={colors.error} />

      {show && (
        <Tip
          style={{
            transform: [{ translateY: 50 }],
          }}
        >
          <TipMessage>{error}</TipMessage>

          <TipView style={{ transform: [{ rotate: '45deg' }] }} />
        </Tip>
      )}
    </Container>
  );
};

export default ErrorTip;
