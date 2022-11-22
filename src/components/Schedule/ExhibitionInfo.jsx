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
  padding: 0.75rem 0;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.gray3};
  display: flex;
  gap: 0.875rem;
`;

const Image = styled.img``;

const InfoContainer = styled.section``;

const InfoTitle = styled.h3`
  font-weight: 600;
  font-size: 0.9375rem;
  line-height: 135%;
  color: ${({ theme }) => theme.colors.black};
`;
