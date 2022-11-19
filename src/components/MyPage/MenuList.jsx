import React from 'react';
import styled from 'styled-components';

export default function MenuList(props) {
  const { menuTitle, menuItems } = props;
  return (
    <MenuTitle>
      {menuTitle}
      {menuItems.map((item, index) => (
        <MenuItem key={index}>{item}</MenuItem>
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
