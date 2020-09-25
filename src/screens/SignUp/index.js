import React, { useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

// ACTIONS
import { signUp } from '../../store/modules/auth/actions';

// CUSTOM IMPORTS
import Background from '../../components/Background';
import { isDataValid } from '../../utils/validations';
import { getYupErrors } from '../../utils/yup';
import logo from '../../assets/logo.png';

import {
  Container,
  Logo,
  Form,
  FormTitle,
  FormInput,
  SubmitButton,
  Text,
  SignLink,
  SignLinkText,
} from './styles';

const SignUp = ({ navigation }) => {
  const dispatch = useDispatch();
  const signing = useSelector((state) => state.auth.signing);

  // REFS
  const formRef = useRef(null);
  const emailRef = useRef();
  const passwordRef = useRef();

  // FUNCTIONS
  const handleSignUp = useCallback(async (data) => {
    try {
      // Clear errors
      if (isDataValid(formRef.current)) formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().email('email inválido').required('O email é obrigatório'),
        password: Yup.string().required('A senha é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const { email, password } = data;

      dispatch(signUp({ email, password }));
    } catch (err) {
      // Format yup errors
      const errors = getYupErrors(err);

      // Set errors into form inputs
      if (isDataValid(formRef.current)) formRef.current.setErrors(errors);
    }
  }, []);

  return (
    <Background>
      <Container>
        <Logo source={logo} />
        <Form ref={formRef} onSubmit={handleSignUp}>
          <FormTitle>Fazer Cadastro</FormTitle>

          <FormInput
            ref={emailRef}
            name="email"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            icon="email"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            ref={passwordRef}
            name="password"
            placeholder="Digite sua senha"
            icon="lock"
            secureTextEntry
            onSubmitEditing={() => {
              if (formRef.current) formRef.current.submitForm();
            }}
          />

          <SubmitButton
            isLoading={signing}
            onPress={() => {
              if (formRef.current) formRef.current.submitForm();
            }}
          >
            Fazer cadastro

          </SubmitButton>
        </Form>

        <Text>Ja possuí uma conta?</Text>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Fazer login</SignLinkText>
        </SignLink>

      </Container>
    </Background>
  );
};

export default SignUp;
