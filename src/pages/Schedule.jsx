import React from 'react';

import Container from '../components/Container';
import MainHeader from '../components/MainHeader';
import CalenderNav from '../components/Schedule/CalenderNav';
import DateInfo from '../components/Schedule/DateInfo';
import Calendar from '../components/Schedule/Calendar';
import WarningText from '../components/Schedule/WarningText';
import HallInfo from '../components/Schedule/HallInfo';
import Detail from '../components/Schedule/Detail';

export default function Schedule() {
  return (
    <Container main={false} isFull={false}>
      <MainHeader title="전체 일정" main={false} />
      <CalenderNav />
      <DateInfo />
      <Calendar />
      <WarningText />
      <HallInfo />
      <Detail />
    </Container>
  );
}
