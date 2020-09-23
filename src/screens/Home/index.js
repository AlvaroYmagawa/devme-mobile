import React from 'react';
import { useSelector } from 'react-redux';

// CUSTOM IMPORTSS
import Background from '../../components/Background';
import Header from '../../components/Header';
import { Container, Posts } from './styles';

const Home = () => {
  const hasName = useSelector((state) => state.user.profile.displayName);

  return (
    <Background>
      <Header title="home" />

      <Container>
        <Posts />
      </Container>

    </Background>
  );
};

export default Home;
