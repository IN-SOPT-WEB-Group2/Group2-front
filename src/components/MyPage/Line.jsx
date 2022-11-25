import React from 'react';
import styled from 'styled-components';

export default function Line({ width, margin }) {
  return <StyledLine width={width} margin={margin}></StyledLine>;
}

const StyledLine = styled.hr`
  width: ${({ width }) => width}px;
  margin: ${({ margin }) => margin};
  border-color: ${({ theme }) => theme.colors.gray3};
`;
