import React from 'react';
import styled from 'styled-components';

export default function HallInfo() {
  return (
    <Container>
      <Hall>
        <HallColor color="#5873FF" />
        <HallName>인춘아트홀</HallName>
      </Hall>
      <Hall>
        <HallColor color="#B658FF" />
        <HallName>IBK챔버홀</HallName>
      </Hall>
      <Hall>
        <HallColor color="#ACBBE2" />
        <HallName>콘서트홀</HallName>
      </Hall>
    </Container>
  );
}

const Container = styled.section`
  border-bottom: 1px solid #e2e2e2;
  width: 100%;
  padding-bottom: 15px;
  display: flex;
  gap: 15px;
`;

const Hall = styled.article`
  display: flex;
  gap: 5px;
`;

const HallColor = styled.div`
  border-radius: 3px;
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.color};
`;

const HallName = styled.span`
  font-size: 11px;
  font-weight: 500;
  line-height: 15px;
`;
