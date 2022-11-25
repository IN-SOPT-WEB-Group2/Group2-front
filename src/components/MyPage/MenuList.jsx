import React from 'react';
import styled from 'styled-components';

let MENU_ID = 0;

export default function MenuList({ menuTitle, menuItems }) {
  return (
    <MenuTitle>
      <div>{menuTitle}</div>
      {menuItems.map((item) => (
        <MenuItem key={MENU_ID++}>{item}</MenuItem>
      ))}
    </MenuTitle>
  );
}

const MenuTitle = styled.ul`
  font-size: 0.9375rem;
  font-weight: 700;
`;

const MenuItem = styled.li`
  font-size: 0.9375rem;
  margin-top: 1.25rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black_secondary};
  cursor: pointer;
`;
