import React, {
  useState, forwardRef, useEffect, useRef, useImperativeHandle, useCallback,
} from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';

// CUSTOM IMPORTS
import { Container, TInput, ErrorMessage } from './styles';
import { colors } from '../../styles';
import ErrorTip from './ErrorTip';

// eslint-disable-next-line object-curly-newline
const Input = ({ style, name, icon, ...rest }, ref) => {
  const {
    registerField, defaultValue, fieldName, error,
  } = useField(name);

  // REFS
  const inputValueRef = useRef({ value: defaultValue });
  const inputElementRef = useRef(null);

  // STATES
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [showTip, setShowTip] = React.useState(false);

  // FUNCTIONS
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  };

  return (
    <>
      <Container style={style} isFocused={isFocused} error={!!error}>
        {icon && (
        <MaterialIcons
          name={icon}
          size={24}
          color={isFocused || isFilled ? colors.accent : colors.primaryDark}
        />
        )}

        <TInput
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          ref={inputElementRef}
          defaultValue={defaultValue}
          onChangeText={(value) => {
            inputValueRef.current.value = value;
          }}
          {...rest}
        />

        {error && <ErrorTip error={error} showTip={showTip} setShowTip={setShowTip} />}
      </Container>

      {error && showTip && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string.isRequired,
};

Input.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Input);
