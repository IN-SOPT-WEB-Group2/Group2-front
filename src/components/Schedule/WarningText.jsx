import React from 'react';
import styled from 'styled-components';

export default function WarningText() {
  return <WarnTxt>*매주 월요일은 정기 휴관일입니다.</WarnTxt>;
}

const WarnTxt = styled.p`
  font-size: 11px;
  line-height: 143.52%;
  color: #949494;
  text-align: right;
  font-weight: 300;
  margin: 8px 0 18px;
`;
