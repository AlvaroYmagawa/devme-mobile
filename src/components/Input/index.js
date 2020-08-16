import React, { forwardRef } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

// CUSTOM IMPORTS
import { Container, TInput } from './styles';
import { colors } from '../../styles';

const Input = ({ style, icon, ...rest }, ref) => (
  <Container style={style}>
    {icon && <MaterialIcons name={icon} size={24} color={colors.primaryDark} />}

    <TInput {...rest} ref={ref} />
  </Container>
);

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Input);
