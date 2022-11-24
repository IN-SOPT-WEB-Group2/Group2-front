import React from 'react';
import styled, { css } from 'styled-components';
import { useState } from 'react';

export default function CategoryNav() {
  const category = ['상세정보', '관람평', '공연장 정보'];
  const [clicked, setClicked] = useState([true, false, false]);

  const onClickCategory = (e) => {
    const index = category.indexOf(e.target.innerHTML);
    const update = [false, false, false];
    update[index] = true;
    setClicked([...update]);
  };

  return (
    <StyledItemWrap>
      {category.map((item, index) => (
        <StyeldItem key={index} onClick={onClickCategory} isClicked={clicked[index]}>
          {item}
        </StyeldItem>
      ))}
    </StyledItemWrap>
  );
}

const StyledItemWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
  width: 335px;
  height: calc(18px + 22px);
  border-bottom: 1px solid #e2e2e2;
`;

const StyeldItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(335px / 3);
  height: 100%;
  font-size: 15px;
  ${(props) =>
    props.isClicked
      ? css`
          font-weight: 600;
          border-bottom: 3px solid #ed1a3b;
          color: #ed1a3b;
        `
      : css`
          font-weight: 400;
          border-bottom: none;
          color: #949494;
        `}
  cursor: pointer;
`;
