import React from 'react';
import styled from 'styled-components';

export default function PerformanceInfo({ data }) {
  let price = data.price;
  price = price.replace('["', '');
  price = price.replace('"]', '');

  return (
    <StyledContainer>
      <StyledTitle>{data.title}</StyledTitle>
      <StyledTagWrap>
        <StyledTag width="3.4375rem">{data.tag}</StyledTag>
        <StyledTag width="5.1875rem">SAC기획</StyledTag>
      </StyledTagWrap>
      <StyledLine />
      <StyledInfoContainer>
        <StyledInfoWrap>
          <StyledInfoTitle>기간</StyledInfoTitle>
          <StyledInfoContent>
            {data.startDate} - {data.endDate}
          </StyledInfoContent>
        </StyledInfoWrap>
        <StyledInfoWrap>
          <StyledInfoTitle>장소</StyledInfoTitle>
          <StyledInfoContent>
            {data.location} | {data.locationDetail}
          </StyledInfoContent>
        </StyledInfoWrap>
        <StyledInfoWrap>
          <StyledInfoTitle>연령</StyledInfoTitle>
          <StyledInfoContent>{data.age}</StyledInfoContent>
        </StyledInfoWrap>
        <StyledInfoWrap>
          <StyledInfoTitle>시간</StyledInfoTitle>
          <StyledInfoContent>{data.openTime}</StyledInfoContent>
        </StyledInfoWrap>
        <StyledInfoWrap>
          <StyledInfoTitle>가격</StyledInfoTitle>
          <StyledInfoContent>{price}</StyledInfoContent>
        </StyledInfoWrap>
      </StyledInfoContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin-top: 3.25rem;
  padding: 0 1.25rem;
`;

const StyledTitle = styled.strong`
  font-size: 1.5625rem;
  font-weight: 700;
  line-height: 1.8644rem;
  color: ${({ theme }) => theme.colors.black};
`;

const StyledTagWrap = styled.div`
  display: flex;
  margin-top: 0.5625rem;
`;

const StyledTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: 1.625rem;
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.0969rem;
  margin-right: 0.375rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.background};
`;

const StyledLine = styled.hr`
  width: 20.9375rem;
  margin: 1.1875rem 0;
  border: 0.0625rem solid ${({ theme }) => theme.colors.gray3};
`;

const StyledInfoContainer = styled.div``;

const StyledInfoWrap = styled.div`
  display: flex;
  margin-top: 0.625rem;
`;

const StyledInfoTitle = styled.div`
  flex: none;
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 135%;
  color: ${({ theme }) => theme.colors.black};
`;
const StyledInfoContent = styled.span`
  width: ;
  font-size: 0.9375rem;
  line-height: 1.125rem;
  margin-left: 1.25rem;
  color: ${({ theme }) => theme.colors.black};
`;
