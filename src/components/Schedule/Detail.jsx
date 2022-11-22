import React from 'react';
import styled from 'styled-components';

import ArrowButton from '../ArrowButton';
import ExhibitionInfo from './ExhibitionInfo';
import { ReactComponent as LeftArrowLogo } from '../../assets/logos/left-arrow.svg';
import { ReactComponent as RightArrowLogo } from '../../assets/logos/right-arrow.svg';

export default function Detail() {
  return (
    <DetailContainer>
      <DetailTitle>
        <DateContainer>
          <Date>2022년 11월 1일</Date>
          <Title>일정</Title>
        </DateContainer>
        <ButtonContainer>
          <ArrowButton>
            <LeftArrowLogo />
          </ArrowButton>
          <ArrowButton>
            <RightArrowLogo />
          </ArrowButton>
        </ButtonContainer>
      </DetailTitle>
      <ExhibitionInfo />
      <ExhibitionInfo />
      <ExhibitionInfo />
    </DetailContainer>
  );
}

const DetailContainer = styled.section`
  padding: 37px 0 24px;
`;

const DetailTitle = styled.article`
  display: flex;
  justify-content: space-between;
  height: 34px;
  margin-bottom: 15px;
`;

const DateContainer = styled.article`
  display: flex;
  gap: 5px;
  font-size: 17px;
  font-weight: 700;
  line-height: 20px;
  margin-top: 2px;
  text-align: center;
  color: #232323;
`;

const Title = styled.p`
  line-height: 30px;
`;

const ButtonContainer = styled.article`
  display: flex;
  gap: 12px;
  margin-top: -6px;
`;

const Date = styled.article`
  border: 1px solid #e2e2e2;
  border-radius: 33px;
  background: #f2f2f2;
  padding: 3px 13px 3px 14px;
`;
