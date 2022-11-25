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
        <Line width="19.125rem" margin="0.75rem 0" />
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
  width: 20.9375rem;
  height: 10.375rem;
  box-shadow: 0rem 0rem 0.9375rem rgba(0, 0, 0, 0.1);
  border-radius: 0.3125rem;
  background-color: var(--color-white);
`;

const ProfileWrap = styled.div`
  width: 19.125rem;
  height: 7.875rem;
`;

const MembershipContainer = styled.div`
  display: flex;
  align-items: center;
  width: 13.625rem;
  height: 4.8125rem;
  margin-top: 0.75rem;
`;

const MembershipInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-left: 1rem;
`;

const StyledName = styled.p`
  font-size: 1.1875rem;
  font-weight: 600;
`;

const StyledId = styled.p`
  font-size: 0.9375rem;
  font-weight: 400;
  margin-left: 0.3125rem;
  color: ${({ theme }) => theme.colors.gray2};
`;

const StyledLoginUser = styled.p`
  font-size: 0.8125rem;
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
  width: 2.6875rem;
  height: 1.25rem;
  background-color: ${({ theme }) => theme.colors.gray1};
  font-size: 0.8125rem;
  color: white;
`;

const MembershipLevel = styled.div`
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1.2656rem;
  margin-left: 0.375rem;
`;

const Period = styled.div`
  font-size: 0.6875rem;
  color: ${({ theme }) => theme.colors.gray2};
`;

const Renewal = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7.75rem;
  height: 1.875rem;
  background-color: ${({ theme }) => theme.colors.background};
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  cursor: pointer;
`;

const FlexWrap = styled.div`
  display: flex;
  align-items: center;
`;
