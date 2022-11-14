import React from 'react';
import styled from 'styled-components';

export default function Container({ children, main }) {
  return <Box main={main}>{children}</Box>;
}

const Box = styled.article`
  background-color: ${props => props.main ? 'var(--color-background)' : 'var(--color-white)'};
  width: 375px;
  margin: 30px auto;
  padding: 0 18px;
  border: 1px solid rgba(0, 0, 0, 0.3);
`;
