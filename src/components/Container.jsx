import React from 'react';
import styled from 'styled-components';

export default function Container({ children }) {
  return <Box>{children}</Box>;
}

const Box = styled.article`
  background-color: #41414d;
  width: 375px;
  margin: 30px auto;
`;
