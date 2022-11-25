import React from 'react';
import styled from 'styled-components';
import TicketLog from '../../assets/logos/티켓 예매 기록.svg';
import LikeList from '../../assets/logos/찜 목록.svg';
import ClassLog from '../../assets/logos/강좌 신청 기록.svg';
import Membership from '../../assets/logos/나의 멤버십.svg';

export default function CategoryNav() {
  return (
    <StyledContainer>
      <StyledWrap>
        <img src={TicketLog} alt="티켓 예매 기록" />
        <StyledFont>티켓 예매 기록</StyledFont>
      </StyledWrap>
      <StyledWrap>
        <img src={LikeList} alt="찜 목록" />
        <StyledFont>찜 목록</StyledFont>
      </StyledWrap>
      <StyledWrap>
        <img src={ClassLog} alt="강좌 신청 기록" />
        <StyledFont>강좌 신청 기록</StyledFont>
      </StyledWrap>
      <StyledWrap>
        <img src={Membership} alt="나의 멤버십" />
        <StyledFont>나의 멤버십</StyledFont>
      </StyledWrap>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20.9375rem;
  margin-top: 1.25rem;
`;

const StyledWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const StyledFont = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.0762rem;
`;
