import styled from 'styled-components';
import React, { useState } from 'react';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const postersInfo = [
    {
      posterSrc: `/posters/2.차이코프스키_포스터.jpg`,
      title: '차이코프스크키 전시회',
      date: '2022.01.02 ~ 2022.01.06',
    },
    {
      posterSrc: `/posters/1.전재성_포스터.png`,
      title: '전재성 연주회',
      date: '2022.01.02',
    },
    {
      posterSrc: `/posters/3.알버트사진전_포스터.jpg`,
      title: '전재성 연주회',
      date: '2022.01.02',
    },
    {
      posterSrc: `/posters/7.뮤지컬브로드웨이_포스터.png`,
      title: '뮤지컬 브로드웨이',
      date: '2022.10.25',
    },
    {
      posterSrc: `/posters/4.드림어빌리티_포스터.jpg`,
      title: '전재성 연주회',
      date: '2022.01.02',
    },
  ];
  return (
    <SliderLayout>
      <MainSliderLayout>
        <ReactScrollWheelHandler
          rightHandler={() => {
            if (current > 0) setCurrent(current - 1);
          }}
          leftHandler={() => {
            if (current < postersInfo.length - 1) setCurrent(current + 1);
          }}
        >
          <Cards current={current}>
            {postersInfo.map(({ posterSrc, title, date }) => {
              return (
                <CardLayout
                  posterSrc={posterSrc}
                  title={title}
                  date={date}
                  key={posterSrc}
                ></CardLayout>
              );
            })}
          </Cards>
        </ReactScrollWheelHandler>
      </MainSliderLayout>
      <SliderNav>
        <Slidebar>
          <CurrentSlide current={current}></CurrentSlide>
        </Slidebar>
      </SliderNav>
    </SliderLayout>
  );
}
const CardLayout = ({ posterSrc, title, date }) => {
  return (
    <Card>
      <Poster src={posterSrc} draggable={false}></Poster>
      <Title>{title}</Title>
      <Date>{date}</Date>
    </Card>
  );
};
const SliderLayout = styled.article`
  height: 21.625rem;
  width: 100%;
  margin-top: 1rem;
`;
const MainSliderLayout = styled.article`
  width: 23.4375rem;
  overflow: hidden;
`;
const Cards = styled.section`
  display: flex;
  transform: ${(props) => `translateX(${97.5 - props.current * 200}px)`};
  gap: 1.375rem;
`;
const SliderNav = styled.nav`
  margin-top: 1.8438rem;
  text-align: center;
  height: 0.0625rem;
  display: flex;
  justify-content: center;
`;
const CurrentSlide = styled.div`
  width: 4.5625rem;
  height: 0.1875rem;
  background-color: #ed1a3b;
  position: absolute;
  top: -0.0625rem;
  transform: ${(props) => `translateX(${-1.5 + props.current * 36}px)`};
`;
const Slidebar = styled.div`
  width: 13.25rem;
  height: 0.0625rem;
  position: relative;
  background-color: #ffffff;
`;
const Card = styled.article`
  display: flex;
  height: 18rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: none;
`;
const Poster = styled.img`
  width: 11.25rem;
  height: 14.25rem;
  border-radius: 0.3125rem;
  margin-bottom: 1.0625rem;
`;
const Title = styled.p`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 1.0625rem;
  line-height: 1.25rem;
  text-align: center;
  color: #ffffff;
  height: 1.25rem;
  margin-bottom: 0.4375rem;
`;
const Date = styled(Title)`
  font-weight: 300;
  height: 1rem;
  font-size: 0.8125rem;
  line-height: 1rem;
  margin: 0;
`;
