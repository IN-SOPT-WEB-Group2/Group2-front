import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as CalendarLogo } from '../../assets/logos/calendar.svg';
import { ReactComponent as ClockLogo } from '../../assets/logos/clock.svg';

export default function ExhibitionInfo({ data }) {
  const navigate = useNavigate();
  const handleClickExhibition = () => {
    navigate(`/detail/${data.id}`, {
      state: {
        id: data.id,
      },
    });
  };
  return (
    <Container onClick={handleClickExhibition}>
      <Image src={data.posterImage} />
      <InfoContainer>
        <InfoTitle>{data.title}</InfoTitle>
        <InfoDate>
          <CalendarLogo />
          <InfoDateText>
            {data.startDate} - {data.endDate}
          </InfoDateText>
        </InfoDate>
        <InfoDate>
          <ClockLogo />
          <InfoDateText>
            {data.startDate} - {data.endDate}
          </InfoDateText>
        </InfoDate>
      </InfoContainer>
    </Container>
  );
}

const Container = styled.article`
  padding: 0.75rem 0;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.gray3};
  display: flex;
  gap: 0.875rem;
  cursor: pointer;
`;

const Image = styled.img`
  border-radius: 0.3125rem;
  width: 7.25rem;
  height: 9.9375rem;
`;

const InfoContainer = styled.section``;

const InfoTitle = styled.h3`
  font-weight: 600;
  font-size: 0.9375rem;
  line-height: 135%;
  color: ${({ theme }) => theme.colors.black};
`;

const InfoDate = styled.p`
  height: 1.375rem;
  margin: 0.5rem 0;
`;

const InfoDateText = styled.span`
  font-size: 0.9375rem;
  line-height: 1.0625rem;
  color: ${({ theme }) => theme.colors.gray3};
  vertical-align: 0.25rem;
  padding-left: 0.5rem;
`;
