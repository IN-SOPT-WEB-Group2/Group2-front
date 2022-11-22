import React, { useState } from 'react';
import styled from 'styled-components';

export default function CalenderNav() {
  const [activeId, setActiveId] = useState(0);
  const handleClickMenu = (id) => {
    setActiveId(id);
  };

  return (
    <NavBox>
      <NavElement
        className={activeId === 0 && 'active'}
        id="음악당"
        onClick={() => handleClickMenu(0)}
      >
        음악당
      </NavElement>
      <NavElement
        className={activeId === 1 && 'active'}
        id="오페라하우스"
        onClick={() => handleClickMenu(1)}
      >
        오페라하우스
      </NavElement>
      <NavElement
        className={activeId === 2 && 'active'}
        id="전시장"
        onClick={() => handleClickMenu(2)}
      >
        전시장
      </NavElement>
    </NavBox>
  );
}

const NavBox = styled.ul`
  border: 1px solid #e2e2e2;
  border-radius: 21px;
  font-size: 15px;
  font-weight: 600;
  width: 100%;
  display: flex;
  margin-top: 28px;
`;

const NavElement = styled.li`
  text-align: center;
  white-space: nowrap;
  line-height: 135%;
  width: calc(100% / 3);
  border-radius: 21px;
  padding: 9px 0;
  cursor: pointer;
  background-color: var(--color-white);
  color: #949494;
  &.active {
    background-color: var(--color-red);
    color: var(--color-white);
    transition: all 0.5s;
  }
`;
