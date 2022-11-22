import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

export default function Container({ children, main, isFull }) {
  return (
    <Box main={main} isFull={isFull}>
      {children}
    </Box>
  );
}

const Box = styled.article`
  background-color: ${(props) => (props.main ? theme.colors.background : theme.colors.white)};
  width: 23.4375rem;
  margin: 1.875rem auto;
  padding: ${(props) => !props.isFull && '0 1.125rem'};
  border: 0.0625rem solid rgba(0, 0, 0, 0.3);
`;
