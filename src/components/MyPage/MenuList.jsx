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
  font-size: 15px;
  font-weight: 700;
`;

const MenuItem = styled.li`
  font-size: 15px;
  margin-top: 20px;
  font-weight: 400;
  color: #232323;
  cursor: pointer;
`;
