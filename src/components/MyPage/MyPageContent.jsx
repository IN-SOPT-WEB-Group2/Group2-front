import React from 'react';
import styled from 'styled-components';
import ProfileCard from './ProfileCard';
import MenuList from './MenuList';
import Line from './Line';
import CategoryNav from './CategoryNav';

export default function MyPageContent() {
  const setAccount = ['개인 정보 수정', '유료 멤버십 갱신/가입', '후원회 관리'];
  const callCenter = ['문의 내역', '이용 약관/정책', '개인정보 처리방침'];

  return (
    <StlyedContainer>
      <ProfileCard />
      <CategoryNav />
      <Line width="20.9375rem" margin="1.375rem 0" />
      <MenuList menuTitle="계정 설정" menuItems={setAccount} />
      <Line width="20.9375rem" margin="1.375rem 0" />
      <MenuList menuTitle="고객 센터" menuItems={callCenter} />
      <Line width="20.9375rem" margin="1.375rem 0" />
      <Logout>로그아웃</Logout>
    </StlyedContainer>
  );
}

const StlyedContainer = styled.section`
  height: 100vh;
  margin: 1.875rem 0 3.125rem 0;
`;

const Logout = styled.p`
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray5};
  cursor: pointer;
`;
