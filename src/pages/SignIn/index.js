import React from 'react';

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

const Signin = () => (
  <Background>
    <Container>

      <Logo source={logo} />

      <Form>
        <FormInput
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Digite seu email"
          icon="email"
        />

        <FormInput
          style={{ marginTop: 8 }}
          placeholder="Digite sua senha"
          icon="lock"
          secureTextEntry
        />

        <SubmitButton onPress={() => {}}>Fazer login</SubmitButton>
      </Form>

      <Text>Aínda não possuí uma conta?</Text>

      <SignLink>
        <SignLinkText>Criar conta</SignLinkText>
      </SignLink>

    </Container>
  </Background>
);

export default Signin;
