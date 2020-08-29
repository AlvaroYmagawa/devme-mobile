import React, { useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

// REDUX ACTIONS
import { signIn } from '../../store/modules/auth/actions';

// CUSTOM IMPORTS
import Background from '../../components/Background';
import logo from '../../assets/logo.png';
import { isDataValid } from '../../utils/validations';
import { getYupErrors } from '../../utils/yup';

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

const Signin = ({ navigation }) => {
  // REDUCER
  const dispatch = useDispatch();
  const signing = useSelector((state) => state.auth.signing);

  // REFS
  const formRef = useRef(null);
  const passwordRef = useRef(null);

  // FUNCTIONS
  const handleSignIn = useCallback(async (data) => {
    try {
      // Clear errors
      if (isDataValid(formRef.current)) formRef.current.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('O email é obrigatório'),
        password: Yup.string().required('A senha é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      dispatch(signIn());
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

        <Form ref={formRef} onSubmit={handleSignIn}>
          <FormTitle>Fazer Login</FormTitle>
          <FormInput
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
            style={{ marginTop: 8 }}
            placeholder="Digite sua senha"
            icon="lock"
            secureTextEntry

          />

          <SubmitButton
            onPress={() => {
              if (formRef.current) formRef.current.submitForm();
            }}
            isLoading={signing}
          >
            Fazer Login
          </SubmitButton>
        </Form>

        <Text>Aínda não possuí uma conta?</Text>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Criar conta</SignLinkText>
        </SignLink>

      </Container>
    </Background>
  );
};

export default Signin;
