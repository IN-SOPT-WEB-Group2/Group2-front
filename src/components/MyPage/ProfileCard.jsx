import React from 'react';
import styled from 'styled-components';
import IconGrade from '../../assets/logos/icon_grade.svg';
import Line from './Line';

export default function ProfileCard() {
  return (
    <ProfileBox>
      <ProfileWrap>
        <Center>
          <FlexWrap>
            <StyledName>이송희</StyledName>
            <StyledId>(songhui12)</StyledId>
          </FlexWrap>
          <StyledLoginUser>로그인 사용자</StyledLoginUser>
        </Center>
        <Line width="306px" margin="12px 0" />
        <MembershipContainer>
          <img src={IconGrade} alt="회원등급아이콘" />
          <MembershipInfo>
            <FlexWrap>
              <Tag>무료</Tag>
              <MembershipLevel>싹틔우기 회원</MembershipLevel>
            </FlexWrap>
            <Period>2022.11.02(수) ~ 2025.10.31</Period>
            <Renewal>멤버십 갱신하기</Renewal>
          </MembershipInfo>
        </MembershipContainer>
      </ProfileWrap>
    </ProfileBox>
  );
}

const ProfileBox = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 335px;
  height: 166px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: var(--color-white);
`;

const ProfileWrap = styled.div`
  width: 306px;
  height: 126px;
`;

const MembershipContainer = styled.div`
  display: flex;
  align-items: center;
  width: 218px;
  height: 77px;
  margin-top: 12px;
`;

const MembershipInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-left: 16px;
`;

const StyledName = styled.p`
  font-size: 19px;
  font-weight: 600;
`;

const StyledId = styled.p`
  font-size: 15px;
  font-weight: 400;
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.gray2};
`;

const StyledLoginUser = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray2};
`;

const Center = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 43px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.gray1};
  font-size: 13px;
  color: white;
`;

const MembershipLevel = styled.div`
  font-size: 15px;
  font-weight: 600;
  line-height: 20.25px;
  margin-left: 6px;
`;

const Period = styled.div`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.gray2};
`;

const Renewal = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 124px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.background};
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
`;

const FlexWrap = styled.div`
  display: flex;
  align-items: center;
`;
