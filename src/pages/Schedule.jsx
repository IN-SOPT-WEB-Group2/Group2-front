import React from 'react';

import Container from '../components/Container';
import MainHeader from '../components/MainHeader';
import CalenderNav from '../components/Schedule/CalenderNav';
import DataInfo from '../components/Schedule/DateInfo';

export default function Schedule() {
  return (
    <Container main={false}>
      <MainHeader title="전체 일정" main={false} />
      <CalenderNav />
      <DataInfo />
    </Container>
  );
}
