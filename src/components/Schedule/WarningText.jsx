import React from 'react';
import styled from 'styled-components';

export default function WarningText() {
  return <WarnTxt>*매주 월요일은 정기 휴관일입니다.</WarnTxt>;
}

const WarnTxt = styled.p`
  font-size: 0.6875rem;
  line-height: 143.52%;
  color: ${({ theme }) => theme.colors.gray2};
  text-align: right;
  font-weight: 300;
  margin: 0.5rem 0 1.125rem;
`;
