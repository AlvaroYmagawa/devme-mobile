import React from 'react';
import { useSelector } from 'react-redux';

// CUSTOM IMPORTS
import {
  Container, Content, RighArea, Logo, SearchButton, MenuButton, SearchIcon, MenuIcon,
} from './styles';

import { colors } from '../../styles';
import miniLogo from '../../assets/miniLogo.png';

const Header = () => {
  // REDUCER
  const avatar = useSelector((state) => state.user.profile.avatar);

  return (
    <Container>
      <Content>
        <Logo source={miniLogo} />

        <RighArea>
          <SearchButton>
            <SearchIcon name="search" size={26} color={colors.text} />
          </SearchButton>

          <MenuButton>
            <MenuIcon name="more-vert" size={26} color={colors.text} />
          </MenuButton>
        </RighArea>
      </Content>

    </Container>
  );
};

export default Header;
