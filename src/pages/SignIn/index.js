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

const Signin = ({ navigation }) => {
  // REFS
  const passwordRef = useRef();

  // FUNCTIONS
  function handleSubmit() {
    navigation.navigate('Home');
  }

  return (
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
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />

          <FormInput
            style={{ marginTop: 8 }}
            placeholder="Digite sua senha"
            icon="lock"
            secureTextEntry
            ref={passwordRef}
            onSubmitEditing={handleSubmit}
          />

          <SubmitButton onPress={handleSubmit}>Fazer login</SubmitButton>
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
