import React from 'react';

import Container from '../components/Container';
import MainHeader from '../components/MainHeader';
import MyPageContent from '../components/MyPage/MyPageContent';
import Footer from '../components/Footer';

export default function MyPage() {
  return (
    <Container>
      <MainHeader title="마이 페이지" main={false}></MainHeader>
      <MyPageContent />
      <Footer />
    </Container>
  );
}
