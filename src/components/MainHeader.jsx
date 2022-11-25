import React from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as MenuIcon } from '../assets/logos/icon_menu.svg';
import { ReactComponent as SearchIcon } from '../assets/logos/icon_search.svg';
import { ReactComponent as MainIcon } from '../assets/logos/image_logo.svg';

export default function MainHeader({ title, main }) {
  return (
    <MainHeaderBox main={main}>
      <MenuIcon />
      {main ? <MainIcon /> : <HeaderTitle>{title}</HeaderTitle>}
      <SearchIcon />
    </MainHeaderBox>
  );
}

const MainHeaderBox = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  ${(props) =>
    !props.main &&
    css`
      width: calc(100% + 2.25rem);
      margin: 0 1.125rem 0 -1.125rem;
    `}
  display: flex;
  justify-content: space-between;
  height: 4rem;
`;

const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.1875rem;
  font-weight: 600;
  line-height: 4rem;
`;
