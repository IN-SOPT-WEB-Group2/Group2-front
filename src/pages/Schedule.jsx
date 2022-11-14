import React from 'react';

import Container from '../components/Container';
import MainHeader from '../components/MainHeader';

export default function Schedule() {
  return (
    <Container>
      <MainHeader title="전체 일정" main={false} />
    </Container>
  );
}
