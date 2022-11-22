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
  padding: 2.3125rem 0 1.5rem;
`;

const DetailTitle = styled.article`
  display: flex;
  justify-content: space-between;
  height: 2.125rem;
  margin-bottom: 0.9375rem;
`;

const DateContainer = styled.article`
  display: flex;
  gap: 0.3125rem;
  font-size: 1.0625rem;
  font-weight: 700;
  line-height: 1.25rem;
  margin-top: 0.125rem;
  text-align: center;
  color: #232323;
`;

const Title = styled.p`
  line-height: 1.875rem;
`;

const ButtonContainer = styled.article`
  display: flex;
  gap: 0.75rem;
  margin-top: -0.375rem;
`;

const Date = styled.article`
  border: 0.0625rem solid ${({ theme }) => theme.colors.gray3};
  border-radius: 2.0625rem;
  background: ${({ theme }) => theme.colors.gray4};
  padding: 0.1875rem 0.8125rem 0.1875rem 0.875rem;
`;
