import React from 'react';

// CUSTOM IMPORTSS
import { Container, Scroll, Item } from './styles';
import Header from '../../components/Header';

const Home = () => (
  <Container>
    <Header />
    <Scroll>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />

    </Scroll>

  </Container>
);

export default Home;
