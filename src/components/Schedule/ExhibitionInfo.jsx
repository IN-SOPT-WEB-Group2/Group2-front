import React from 'react';
import styled from 'styled-components';

import ImageSrc from '../../assets/images/exhibitionImage.png';

export default function ExhibitionInfo() {
  return (
    <Container>
      <Image src={ImageSrc} />
      <InfoContainer>
        <InfoTitle>헬가 스텐첼 사진전</InfoTitle>
      </InfoContainer>
    </Container>
  );
}

const Container = styled.article`
  padding: 12px 0;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  gap: 14px;
`;

const Image = styled.img``;

const InfoContainer = styled.section``;

const InfoTitle = styled.h3`
  font-weight: 600;
  font-size: 15px;
  line-height: 135%;
  color: #131112;
`;
