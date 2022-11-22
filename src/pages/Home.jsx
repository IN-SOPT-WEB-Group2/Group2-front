import React from 'react';
import styled from 'styled-components';
import Carousel from '../components/Carousel/Carousel';
import { SubSlider, SubHeader } from '../components/SubSlider/SubSlider';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import { ReactComponent as PlaceIcon2 } from '../assets/logos/icon_오페라하우스.svg';
import { ReactComponent as PlaceIcon1 } from '../assets/logos/icon_음악당.svg';
import { ReactComponent as PlaceIcon3 } from '../assets/logos/icon_전시장.svg';

// import { ReactComponent as PlaceIcon2 } from '';
// import { ReactComponent as PlaceIcon3 } from '/;
export default function Home() {
  return (
    <Homelayout>
      <BlurredBack></BlurredBack>
      <Section></Section>
      <Article>
        <MainHeader main={true} />
        <Carousel></Carousel>
      </Article>
      <Places>
        <Div>공간 둘러보기</Div>
        <PlacesContainer>
          <PlaceItem>
            <div>
              <PlaceIcon1></PlaceIcon1>
            </div>
            <Span>음악당</Span>
          </PlaceItem>
          <PlaceItem>
            <div>
              <PlaceIcon2></PlaceIcon2>
            </div>
            <Span>오페라하우스</Span>
          </PlaceItem>
          <PlaceItem>
            <div>
              <PlaceIcon3></PlaceIcon3>
            </div>
            <Span>전시장</Span>
          </PlaceItem>
        </PlacesContainer>
      </Places>
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
        <StyledNotice>
          <SubHeader notice={true} title={'공지 사항'}></SubHeader>
        </StyledNotice>
        <StyledMedia>
          <SubHeader media={true} title={'미디어'}></SubHeader>
        </StyledMedia>
      </StyledInfosContainer>
      <Footer></Footer>
    </Homelayout>
  );
}
const Homelayout = styled.section`
  overflow: hidden;
  width: 375px;
  position: relative;
`;
const BlurredBack = styled.img`
  background: url('/posters/2.차이코프스키_포스터.jpg') no-repeat rgba(0, 0, 0, 0.55);
  width: 398px;
  height: 544px;
  left: -11px;
  top: -27px;
  background-size: 480px;
  position: absolute;
  z-index: -2;
  border-radius: 5px;
`;
const Section = styled.section`
  position: absolute;
  width: 401px;
  height: 489px;
  left: -14px;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(10px);
  z-index: -1;
`;
const Article = styled.article`
  backdrop-filter: blur(10px);
  height: 26.6875rem;
  > article {
    background-color: transparent;
  }
`;
const Places = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 188px;
  background-color: #41414d;
  padding: 28px 0;
  gap: 22px;
`;
const PlacesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 44px;
  width: 292px;
  height: 90px;
`;
const Div = styled.div`
  width: 93px;
  height: 20px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;
const PlaceItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 4px;
  width: 68px;
  height: 90px;
`;
const Span = styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 135%;
  text-align: center;
  color: #e2e2e2;
`;
const StyledInfosContainer = styled.section`
  width: 375px;
  height: 1529px;
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
const StyledNotice = styled.article`
  margin: 0 1.25rem;
  height: 12.3125rem;
  width: 20.9375rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5625rem;
`;
const StyledMedia = styled.article`
  margin: 0 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 20.9375rem;
  height: 20.9375rem;
`;
