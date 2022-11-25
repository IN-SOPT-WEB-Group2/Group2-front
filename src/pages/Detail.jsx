import React from 'react';
import DetailContent from '../components/Detail/DetailContent';
import Container from '../components/Container';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
export default function Detail() {
  return (
<<<<<<< HEAD
    <Container isFull={false}>
=======
    <Container main={false} isFull={false}>
>>>>>>> 37fc07af308e331900e153133172989fb58cecd7
      <MainHeader main={false} title={'공연/전시 정보'} />
      <DetailContent />
      <Footer />
    </Container>
  );
}
