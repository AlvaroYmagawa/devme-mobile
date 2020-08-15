import React from 'react';

// CUSTOM IMPORTSS
import Background from '../../components/Background';
import { Container, Scroll, Categories } from './styles';
import Header from '../../components/Header';

const Home = () => (
  <Background>
    <Container>
      <Header />
      <Scroll>
        <Categories />
      </Scroll>

    </Container>
  </Background>
);

export default Home;
