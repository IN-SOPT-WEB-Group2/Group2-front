import React from 'react';
import Container from '../components/Container';
import HomeContent from '../components/Home/HomeContent';
export default function Home() {
  return (
    <Container isFull={true} main={true}>
      <HomeContent></HomeContent>
    </Container>
  );
}
