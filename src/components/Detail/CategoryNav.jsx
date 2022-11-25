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
  margin: 0 1.25rem;
  width: 20.9375rem;
  height: calc(1.125rem + 1.375rem);
  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.white_secondary};
`;

const StyeldItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(20.9375rem / 3);
  height: 100%;
  font-size: 0.9375rem;
  ${(props) =>
    props.isClicked
      ? css`
          font-weight: 600;
          border-bottom: 0.1875rem solid ${({ theme }) => theme.colors.red};
          color: ${({ theme }) => theme.colors.red};
        `
      : css`
          font-weight: 400;
          border-bottom: none;
          color: ${({ theme }) => theme.colors.gray2};
        `}
  cursor: pointer;
`;
