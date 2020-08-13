import React from 'react';
import { useSelector } from 'react-redux';

// CUSTOM IMPORTS
import {
  Container, Content, Logo, Avatar, AvatarButton,
} from './styles';

import miniLogo from '../../assets/miniLogo.png';

const Header = () => {
  // REDUCER
  const avatar = useSelector((state) => state.user.profile.avatar);

  return (
    <Container>
      <Content>
        <Logo source={miniLogo} />

        <AvatarButton onPress={() => alert('clcik')}>
          <Avatar source={{ uri: avatar }} />
        </AvatarButton>
      </Content>

    </Container>
  );
};

export default Header;
