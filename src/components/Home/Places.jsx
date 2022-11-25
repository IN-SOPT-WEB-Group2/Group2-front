import React from 'react';
import styled from 'styled-components';
import { ReactComponent as PlaceIcon2 } from '../../assets/logos/icon_오페라하우스.svg';
import { ReactComponent as PlaceIcon1 } from '../../assets/logos/icon_음악당.svg';
import { ReactComponent as PlaceIcon3 } from '../../assets/logos/icon_전시장.svg';
export default function Places() {
  return (
    <StyledPlaces>
      <StyledTitle>공간 둘러보기</StyledTitle>
      <PlacesContainer>
        <PlaceItem>
          <div>
            <PlaceIcon1></PlaceIcon1>
          </div>
          <StyledFont>음악당</StyledFont>
        </PlaceItem>
        <PlaceItem>
          <div>
            <PlaceIcon2></PlaceIcon2>
          </div>
          <StyledFont>오페라하우스</StyledFont>
        </PlaceItem>
        <PlaceItem>
          <div>
            <PlaceIcon3></PlaceIcon3>
          </div>
          <StyledFont>전시장</StyledFont>
        </PlaceItem>
      </PlacesContainer>
    </StyledPlaces>
  );
}
const StyledPlaces = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 11.75rem;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 1.75rem 0;
  gap: 1.375rem;
`;
const PlacesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 2.75rem;
  width: 18.25rem;
  height: 5.625rem;
`;
const StyledTitle = styled.div`
  width: 5.8125rem;
  height: 1.25rem;
  font-weight: 700;
  font-size: 1.0625rem;
  line-height: 1.25rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;
const PlaceItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  width: 4.25rem;
  height: 5.625rem;
`;
const StyledFont = styled.span`
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 135%;
  text-align: center;
  color: ${({ theme }) => theme.colors.white_secondary};
`;
