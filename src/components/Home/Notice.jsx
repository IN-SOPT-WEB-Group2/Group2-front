import React from 'react';
import styled from 'styled-components';
import { SubHeader } from './SubSlider';
export default function Notice() {
  const notices = [
    { content: '11월 22일 신규 <대관자 파트너 센터> 오픈', date: '22.03.25' },
    { content: '예술의 전당 하우스 어텐던트 모집', date: '22.11.09' },
    { content: '2023년도 대한민국 오페라 페스티벌 출연...', date: '22.11.10' },
    { content: '음악당 2022년 수시 대관(2차) 공고', date: '22.10.08' },
  ];
  return (
    <StyledNoticeWrapper>
      <SubHeader notice={true} title={'공지 사항'}></SubHeader>
      <StyledNoticeUl>
        {notices.map((notice) => {
          return (
            <>
              <StyledNoticeLi key={notice.content}>
                <StyledNoticeContent>{notice.content}</StyledNoticeContent>
                <StyledNoticeDate>{notice.date}</StyledNoticeDate>
              </StyledNoticeLi>
              <StyledBorder></StyledBorder>
            </>
          );
        })}
      </StyledNoticeUl>
    </StyledNoticeWrapper>
  );
}
const StyledNoticeWrapper = styled.article`
  margin: 0 1.25rem;
  height: 12.3125rem;
  width: 20.9375rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5625rem;
`;

const StyledNoticeUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 20.9375rem;
  height: 9.375rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem;
  gap: 0.8125rem;
`;
const StyledNoticeLi = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.375rem;
  width: 20.9375rem;
  height: 1.125rem;
`;
const StyledNoticeContent = styled.span`
  font-weight: 400;
  font-size: 0.9375rem;
  line-height: 1.125rem;
  width: 16.25rem;
  height: 1.125rem;
  color: ${({ theme }) => theme.colors.white_secondary};
`;
const StyledNoticeDate = styled.span`
  width: 3.3125rem;
  height: 1rem;
  font-weight: 300;
  font-size: 0.8125rem;
  line-height: 1rem;
  display: flex;
  align-items: center;
  text-align: right;
  color: ${({ theme }) => theme.colors.gray1};
`;
const StyledBorder = styled.div`
  width: 20.9375rem;
  height: 0.0437rem;
  flex: none;
  background-color: ${({ theme }) => theme.colors.gray1};
  &:last-of-type {
    display: none;
  }
`;
