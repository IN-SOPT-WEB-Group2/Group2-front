import styled from 'styled-components';
import React from 'react';
import Media from './Media';
import Footer from '../Footer';
import { ReactComponent as ChatbotIcon } from '../../assets/logos/icon_챗봇.svg';
import Places from './Places';
import Notice from './Notice';
import Others from './Others';
import CarouselBackground from './CarouselBackground';
import Tickets from './Tickets';
import Performances from './Performances';
export default function HomeContent() {
  return (
    <>
      <CarouselBackground />
      <Places />
      <StyledInfosContainer>
        <StyledSubSliderContainer>
          <Performances />
          <Tickets />
        </StyledSubSliderContainer>
        <img src="/banners/홍보 배너.png" />
        <Notice />
        <Media />
      </StyledInfosContainer>
      <Others />
      <Footer />
      <StyledChatbotWrapper>
        <ChatbotIcon />
      </StyledChatbotWrapper>
    </>
  );
}
const StyledInfosContainer = styled.section`
  width: 23.4375rem;
  height: 95.5625rem;
  background: #373741;
  padding-top: 2.5625rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;
const StyledSubSliderContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  margin-left: 1.25rem;
`;
const StyledChatbotWrapper = styled.div`
  left: 18.4375rem;
  position: fixed;
  width: 64px;
  height: 64px;
  bottom: 1.5rem;
`;
