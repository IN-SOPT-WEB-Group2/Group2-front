import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import CategoryNav from './CategoryNav';
import PerformanceInfo from './PerformanceInfo';
import PerformanceDetail from './PerformanceDetail';
import Reserve from './Reserve';

import { useGetDetailContentInfo } from '../../api/detailContent.js';

export default function DetailContent() {
  const location = useLocation();
  console.log(location);
  const data = useGetDetailContentInfo(location.state.id)[1][0];
  console.log(data);

  return (
    data && (
      <StyledContainer>
        <StyledImage src={data['posterImage']} alt="포스터" />
        <StyledWrap>
          <PerformanceInfo data={data} />
          <CategoryNav />
          <PerformanceDetail data={data} />
        </StyledWrap>
        <Reserve />
      </StyledContainer>
    )
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const StyledImage = styled.img`
  position: absolute;
  width: 10rem;
  height: 13.6875rem;
  margin-top: 0.5625rem;
  border-radius: 0.3125rem;
  z-index: 9;
`;

const StyledWrap = styled.div`
  margin-top: 12.5rem;
  padding: 0 0 1.875rem 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0rem 0rem 1.875rem rgba(0, 0, 0, 15);
  border-radius: 0.9375rem 0.9375rem 0 0;
`;
