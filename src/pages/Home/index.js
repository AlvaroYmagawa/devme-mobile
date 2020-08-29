import React from 'react';

// CUSTOM IMPORTSS
import Background from '../../components/Background';
import Header from '../../components/Header';
import { Container, Posts } from './styles';

const Home = () => (
  <Background>
    <Header title="home" />

    <Container>

      <Posts />

    </Container>
  </Background>
);

export default Home;
