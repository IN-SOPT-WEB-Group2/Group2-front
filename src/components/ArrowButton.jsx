import React from 'react';
import styled from 'styled-components';

export default function ArrowButton({ children }) {
  return <StyledArrowButton>{children}</StyledArrowButton>;
}

const StyledArrowButton = styled.article`
  background-color: var(--color-white);
  border: 1px solid #e2e2e2;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  margin-top: 7px;
  cursor: pointer;
  svg {
    margin-left: 12px;
  }
`;
