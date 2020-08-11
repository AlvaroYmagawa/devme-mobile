import React, { useRef } from 'react';

// CUSTOM IMPORTS
import Background from '../../components/Background';
import logo from '../../assets/logo.png';

import {
  Container,
  Logo,
  Form,
  FormInput,
  SubmitButton,
  Text,
  SignLink,
  SignLinkText,
} from './styles';

const SignUp = ({ navigation }) => {
  // REFS
  const emailRef = useRef();
  const passwordRef = useRef();

  // FUNCTIONS
  function handleSubmit() {
    alert('submit');
  }

  return (
    <Background>
      <Container>

        <Logo source={logo} />

        <Form>
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            icon="person"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />

          <FormInput
            ref={emailRef}
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
            placeholder="Digite sua senha"
            icon="lock"
            secureTextEntry
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}>Fazer cadastro</SubmitButton>
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
