import React from 'react';

// CUSTOM IMPORTS
import {
  Container, Content, RighArea, Logo, SearchButton, SearchIcon,
} from './styles';

import { colors } from '../../styles';
import miniLogo from '../../assets/miniLogo.png';

const Header = ({ title }) => (
  <Container>
    <Content>
      <Logo source={miniLogo} />

      <RighArea>
        <SearchButton>
          <SearchIcon name="search" size={26} color={colors.text} />
        </SearchButton>

      </RighArea>
    </Content>

  </Container>
);
export default Header;
