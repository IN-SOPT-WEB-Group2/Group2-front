import React from 'react';
import styled from 'styled-components';

import { ReactComponent as MenuIcon } from '../assets/logos/icon_menu.svg';
import { ReactComponent as SearchIcon } from '../assets/logos/icon_search.svg';
import { ReactComponent as MainIcon } from '../assets/logos/image_logo.svg';

export default function MainHeader({ title, main }) {
  return (
    <MainHeaderBox>
      <MenuIcon />
      {main ? <MainIcon /> : <HeaderTitle>{title}</HeaderTitle>}
      <SearchIcon />
    </MainHeaderBox>
  );
}

const MainHeaderBox = styled.header`
  background-color: #41414d;
  width: calc(100% + 36px);
  margin: 0 18px 0 -18px;
  display: flex;
  justify-content: space-between;
  height: 64px;
`;

const HeaderTitle = styled.h1`
  color: var(--color-white);
  font-size: 19px;
  font-weight: 600;
  line-height: 64px;
`;
