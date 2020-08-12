import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// REDUX ACTIONS
import { signUp } from '../../store/modules/auth/actions';

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
  // REDUCER
  const dispatch = useDispatch();
  const signing = useSelector((state) => state.auth.signing);

  // REFS
  const emailRef = useRef();
  const passwordRef = useRef();

  // STATES
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  // FUNCTIONS
  function handleSubmit() {
    dispatch(signUp(name, email, password));
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
            onChangeText={setName}
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
            onChangeText={setEmail}
          />

          <FormInput
            ref={passwordRef}
            placeholder="Digite sua senha"
            icon="lock"
            secureTextEntry
            onSubmitEditing={handleSubmit}
            onChangeText={setPassword}
          />

          <SubmitButton isLoading={signing} onPress={handleSubmit}>Fazer cadastro</SubmitButton>
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
