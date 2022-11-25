import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function CalenderNav() {
  const location = useLocation();
  const [activeId, setActiveId] = useState(location.state.id);
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
  border: 0.0625rem solid ${({ theme }) => theme.colors.gray3};
  border-radius: 1.3125rem;
  font-size: 0.9375rem;
  font-weight: 600;
  width: 100%;
  display: flex;
  margin-top: 1.75rem;
`;

const NavElement = styled.li`
  text-align: center;
  white-space: nowrap;
  line-height: 135%;
  width: calc(100% / 3);
  border-radius: 1.3125rem;
  padding: 0.5625rem 0;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray2};
  &.active {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
    transition: all 0.5s;
  }
`;
