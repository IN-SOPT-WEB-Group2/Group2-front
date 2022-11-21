import React from 'react';
import styled from 'styled-components';

export default function PerformanceInfo() {
  return (
    <StyledContainer>
      <StyledTitle>헬가 스텐첼 사진전</StyledTitle>
      <StyledTagWrap>
        <StyledTag width="55px">전시</StyledTag>
        <StyledTag width="83px">SAC기획</StyledTag>
      </StyledTagWrap>
      <StyledLine />
      <StyledInfoContainer>
        <StyledInfoWrap>
          <StyledInfoTitle>장소</StyledInfoTitle>
          <StyledInfoContent>예술의 전당 | 전시 홀</StyledInfoContent>
        </StyledInfoWrap>
        <StyledInfoWrap>
          <StyledInfoTitle>연령</StyledInfoTitle>
          <StyledInfoContent>8세이상</StyledInfoContent>
        </StyledInfoWrap>
        <StyledInfoWrap>
          <StyledInfoTitle>시간</StyledInfoTitle>
          <StyledInfoContent>
            평일,토요일 11:00 - 18:00
            <br />
            일요일 휴무
          </StyledInfoContent>
        </StyledInfoWrap>
        <StyledInfoWrap>
          <StyledInfoTitle>가격</StyledInfoTitle>
          <StyledInfoContent>
            성인 12,000원
            <br />
            아동 6,000원
          </StyledInfoContent>
        </StyledInfoWrap>
      </StyledInfoContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin-top: 52px;
  padding: 0 20px;
`;

const StyledTitle = styled.strong`
  font-size: 25px;
  font-weight: 700;
  line-height: 29.83px;
  color: #131112;
`;

const StyledTagWrap = styled.div`
  display: flex;
  margin-top: 9px;
`;

const StyledTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: 26px;
  font-size: 13px;
  font-weight: 500;
  line-height: 17.55px;
  margin-right: 6px;
  color: #ffffff;
  background-color: #41414d;
`;

const StyledLine = styled.hr`
  width: 335px;
  margin: 19px 0;
  border: 1px solid #e2e2e2;
`;

const StyledInfoContainer = styled.div``;

const StyledInfoWrap = styled.div`
  display: flex;
  margin-top: 10px;
`;

const StyledInfoTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  line-height: 135%;
  color: #131112;
`;
const StyledInfoContent = styled.span`
  font-size: 15px;
  line-height: 18px;
  margin-left: 20px;
  color: #131112;
`;
