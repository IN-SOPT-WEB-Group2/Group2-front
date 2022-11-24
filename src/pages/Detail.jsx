import React from 'react';
import DetailContent from '../components/Detail/DetailContent';
import Container from '../components/Container';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
export default function Detail() {
  return (
    <Container>
      <MainHeader main={false} title={'공연/전시 정보'} />
      <DetailContent />

      <Footer />
    </Container>
  );
}