import React from 'react';
import styled from 'styled-components';
import ProfileCard from './ProfileCard';
import MenuList from './MenuList';
import Line from './Line';

export default function MyPageContent() {
  const setAccount = ['개인 정보 수정', '유료 멤버십 갱신/가입', '후원회 관리'];
  const callCenter = ['문의 내역', '이용 약관/정책', '개인정보 처리방침'];

  return (
    <StlyedContainer>
      <ProfileCard />
      <Line width="335px" margin="22px 0" />
      <MenuList menuTitle="계정 설정" menuItems={setAccount} />
      <Line width="335px" margin="22px 0" />
      <MenuList menuTitle="고객 센터" menuItems={callCenter} />
      <Line width="335px" margin="22px 0" />
      <Logout>로그아웃</Logout>
    </StlyedContainer>
  );
}

const StlyedContainer = styled.div`
  height: 100vh;
  margin: 30px 20px 50px;
`;

const Logout = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #9d9d9d;
  cursor: pointer;
`;
