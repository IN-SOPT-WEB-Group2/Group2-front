import React from 'react';
import styled from 'styled-components';

export default function HallInfo() {
  return (
    <Container>
      <Hall>
        <HallColor color={({ theme }) => theme.colors.calendar_blue} />
        <HallName>인춘아트홀</HallName>
      </Hall>
      <Hall>
        <HallColor color={({ theme }) => theme.colors.calendar_purple} />
        <HallName>IBK챔버홀</HallName>
      </Hall>
      <Hall>
        <HallColor color={({ theme }) => theme.colors.calendar_gray} />
        <HallName>콘서트홀</HallName>
      </Hall>
    </Container>
  );
}

const Container = styled.section`
  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.gray3};
  width: 100%;
  padding-bottom: 0.9375rem;
  display: flex;
  gap: 0.9375rem;
`;

const Hall = styled.article`
  display: flex;
  gap: 0.3125rem;
`;

const HallColor = styled.div`
  border-radius: 0.1875rem;
  width: 1rem;
  height: 1rem;
  background-color: ${(props) => props.color};
`;

const HallName = styled.span`
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 0.9375rem;
`;
