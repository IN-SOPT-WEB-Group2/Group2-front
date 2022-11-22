import React from 'react';
import styled from 'styled-components';

import { ReactComponent as LeftArrowLogo } from '../../assets/logos/left-arrow.svg';
import { ReactComponent as RightArrowLogo } from '../../assets/logos/right-arrow.svg';
import ArrowButton from '../ArrowButton';

export default function DateInfo() {
  return (
    <InfoContainer>
      <ArrowButton>
        <LeftArrowLogo />
      </ArrowButton>
      <InfoTitle>2022년 11월</InfoTitle>
      <ArrowButton>
        <RightArrowLogo />
      </ArrowButton>
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 234px;
  margin: 16px auto 8px;
`;

const InfoTitle = styled.h2`
  font-weight: 600;
  font-size: 19px;
  line-height: 23px;
  padding: 12.5px 0;
`;
