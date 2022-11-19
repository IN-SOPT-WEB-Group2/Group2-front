import React from 'react';
import styled from 'styled-components';

export default function Line(props) {
  const { width,margin } = props;
  return <StyledLine width={width} margin={margin}></StyledLine>;
}

const StyledLine = styled.hr`
  width: ${({ width }) => width}px;
  margin: ${({ margin }) => margin};
`;
