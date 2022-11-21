import React from 'react';
import styled from 'styled-components';

import CategoryNav from './CategoryNav';
import PerformanceInfo from './PerformanceInfo';
import PerformanceDetail from './PerformanceDetail';
import Reserve from './Reserve';

import Poster from '../../assets/logos/image poster.svg';

export default function DetailContent() {
  return (
    <StyledContainer>
      <StyledImage src={Poster} alt="포스터" />
      <StyledWrap>
        <PerformanceInfo />
        <CategoryNav />
        <PerformanceDetail />
      </StyledWrap>
      <Reserve />
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #41414d;
`;

const StyledImage = styled.img`
  position: absolute;
  width: 160px;
  height: 219px;
  margin-top: 9px;
  border-radius: 5px;
  z-index: 9;
`;

const StyledWrap = styled.div`
  margin-top: 200px;
  padding: 0 0 30px 0;
  background-color: #ffffff;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 15);
  border-radius: 15px 15px 0 0;
`;
