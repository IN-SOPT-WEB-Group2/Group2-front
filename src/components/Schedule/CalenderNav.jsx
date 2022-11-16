import React, { useState } from 'react';
import styled, { css } from 'styled-components';

export default function CalenderNav() {
  const [isClicked, setIsClicked] = useState(false);

  const onClickNavBar = (e) => {
    if (e.target.innerText === e.target.id) {
        setIsClicked(true);
    } else {
        setIsClicked(false);
    }
  };
  return (
    <NavBox onClick={onClickNavBar}>
        <NavElement id="음악당" isClicked={isClicked}>음악당</NavElement>
        <NavElement id="오페라하우스" isClicked={!isClicked}>오페라하우스</NavElement>
        <NavElement id="전시장" isClicked={!isClicked}>전시장</NavElement>
    </NavBox>
  )
}

const NavBox = styled.ul`
    border: 1px solid #E2E2E2;
    border-radius: 21px;
    font-size: 15px;
    font-weight: 600;
    width: 100%;
    display: flex;
    margin-top: 28px;
`

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
    ${props => props.isClicked ? (
        css`
            background-color: var(--color-red);
            color: var(--color-white);
        `
    ) : (
        css`
            background-color: var(--color-white);
            color: #949494;
        `
    )}
`