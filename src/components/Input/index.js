import React, {
  useState,
  forwardRef,
  useEffect,
  useRef,
  useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import { useField } from '@unform/core';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

// CUSTOM IMPORTS
import {
  Container, Title, Fieldset, TInput, EyeButton,
} from './styles';
import ErrorTip from './ErrorTip';
import { colors } from '../../styles';

// eslint-disable-next-line object-curly-newline
const Input = ({ style, title, name, isPassword, icon, ...rest }, ref) => {
  const {
    registerField, defaultValue, fieldName, error,
  } = useField(name);

  // REFS
  const inputValueRef = useRef({ value: defaultValue });
  const inputElementRef = useRef(null);

  // STATES
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const [showPassword, setShowPassword] = React.useState(false);

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
    <Container style={style}>
      {title && <Title>{title}</Title>}

      <Fieldset isFocused={isFocused} error={!!error}>
        {icon && (
          <MaterialIcons
            name={icon}
            size={24}
            color={isFilled ? colors.accent : colors.text}
            style={{ marginRight: 16 }}
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
          secureTextEntry={isPassword && !showPassword}
          {...rest}
        />

        {isPassword && (
          <EyeButton onPress={() => setShowPassword(!showPassword)}>
            <MaterialCommunityIcons
              name={showPassword ? 'eye-outline' : 'eye-off-outline'}
              size={24}
              color={colors.accent}
            />
          </EyeButton>
        )}

        {error && <ErrorTip error={error} />}
      </Fieldset>
    </Container>
  );
};

Input.propTypes = {
  title: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string.isRequired,
  isPassword: PropTypes.bool,
};

Input.defaultProps = {
  title: null,
  style: {},
  isPassword: false,
};

export default forwardRef(Input);
