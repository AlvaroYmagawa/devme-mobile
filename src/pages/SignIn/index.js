import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// REDUX ACTIONS
import { signIn } from '../../store/modules/auth/actions';

// CUSTOM IMPORTS
import Background from '../../components/Background';
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

const Signin = ({ navigation }) => {
  // REDUCER
  const dispatch = useDispatch();
  const signing = useSelector((state) => state.auth.signing);

  // REFS
  const passwordRef = useRef();

  // STATES
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // FUNCTIONS
  function handleSubmit() {
    dispatch(signIn(email, password));
  }

  return (
    <Background>
      <Container>

        <Logo source={logo} />

        <Form>
          <FormTitle>Fazer Login</FormTitle>
          <FormInput
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu email"
            icon="email"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            onChangeText={setEmail}
          />

          <FormInput
            style={{ marginTop: 8 }}
            placeholder="Digite sua senha"
            icon="lock"
            secureTextEntry
            ref={passwordRef}
            onSubmitEditing={handleSubmit}
            onChangeText={setPassword}
          />

          <SubmitButton onPress={handleSubmit} isLoading={signing}>
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
