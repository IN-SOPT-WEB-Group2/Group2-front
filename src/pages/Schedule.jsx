import React from 'react';

import Container from '../components/Container';
import MainHeader from '../components/MainHeader';
import CalenderNav from '../components/Schedule/CalenderNav';
import DateInfo from '../components/Schedule/DateInfo';
import Calendar from '../components/Schedule/Calendar';
import HallInfo from '../components/Schedule/HallInfo';

export default function Schedule() {
  return (
    <Container main={false}>
      <MainHeader title="전체 일정" main={false} />
      <CalenderNav />
      <DateInfo />
      <Calendar />
      <HallInfo />
    </Container>
  );
}
