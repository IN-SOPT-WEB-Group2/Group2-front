import React from 'react';
import styled from 'styled-components';
import { ReactComponent as PlaceInfoIcon } from '../../assets/logos/icon_장소안내.svg';
import { ReactComponent as MusicFountainIcon } from '../../assets/logos/icon_음악 분수.svg';
import { ReactComponent as ParkingIcon } from '../../assets/logos/icon_교통주차.svg';
import { ReactComponent as SACIcon } from '../../assets/logos/icon_saconscreen.svg';
export default function Others() {
  return (
    <StyledOthersWrapper>
      <StyledOthersContainer>
        <StyledOther>
          <PlaceInfoIcon />
          <StyledOtherName>공간 안내</StyledOtherName>
        </StyledOther>
        <StyledOther>
          <ParkingIcon></ParkingIcon>
          <StyledOtherName>교통/주차</StyledOtherName>
        </StyledOther>
        <StyledOther>
          <MusicFountainIcon></MusicFountainIcon>
          <StyledOtherName>음악 분수</StyledOtherName>
        </StyledOther>
        <StyledOther>
          <SACIcon></SACIcon>
          <StyledOtherName>SAC on Screen</StyledOtherName>
        </StyledOther>
      </StyledOthersContainer>
    </StyledOthersWrapper>
  );
}
const StyledOthersWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #41414d;
  height: 10.6875rem;
`;
const StyledOthersContainer = styled.article`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1.625rem;
  width: 18.375rem;
  height: 6.3125rem;
`;
const StyledOther = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6875rem;
  width: 3.375rem;
  height: 5.1875rem;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const StyledOtherName = styled.div`
  width: 3.375rem;
  height: 1.125rem;
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 135%;
  text-align: center;
  color: #e2e2e2;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
