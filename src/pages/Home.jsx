import React from 'react';
import styled from 'styled-components';
import Carousel from '../components/Home/Carousel';
import { SubSlider } from '../components/Home/SubSlider';
import Media from '../components/Home/Media';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import { ReactComponent as ChatbotIcon } from '../assets/logos/icon_챗봇.svg';
import Places from '../components/Home/Places';
import Notice from '../components/Home/Notice';
import Others from '../components/Home/Others';
export default function Home() {
  return (
    <Homelayout>
      <BlurredBack></BlurredBack>
      <Section></Section>
      <Article>
        <MainHeader main={true} />
        <Carousel></Carousel>
      </Article>
      <Places></Places>
      <StyledInfosContainer>
        <StyledSubSliderContainer>
          <SubSlider
            exhibit={true}
            moreInfo={'전체 일정 보기'}
            title={'이번 주 공연/전시'}
          ></SubSlider>
          <SubSlider ticket={true} title={'티켓 오픈'}></SubSlider>
        </StyledSubSliderContainer>
        <img src="/banners/홍보 배너.png"></img>
        <Notice></Notice>
        <Media></Media>
      </StyledInfosContainer>
      <Others></Others>
      <Footer></Footer>
      <StyledChatbotWrapper>
        <ChatbotIcon></ChatbotIcon>
      </StyledChatbotWrapper>
    </Homelayout>
  );
}
const Homelayout = styled.section`
  overflow: hidden;
  width: 23.4375rem;
  position: relative;
`;
const BlurredBack = styled.img`
  background: url('/posters/2.차이코프스키_포스터.jpg') no-repeat rgba(0, 0, 0, 0.55);
  width: 24.875rem;
  height: 34rem;
  left: -0.6875rem;
  top: -1.6875rem;
  background-size: 30rem;
  position: absolute;
  z-index: -2;
  border-radius: 0.3125rem;
`;
const Section = styled.section`
  position: absolute;
  width: 25.0625rem;
  height: 30.5625rem;
  left: -0.875rem;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(0.625rem);
  z-index: -1;
`;
const Article = styled.article`
  backdrop-filter: blur(0.625rem);
  height: 26.6875rem;
  > article {
    background-color: transparent;
  }
`;
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
