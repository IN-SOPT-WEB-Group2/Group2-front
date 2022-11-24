import styled from 'styled-components';
import React from 'react';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';
export default function Carousel({ setPosterIdx, carouselData, posterIdx }) {
  return (
    <SliderLayout>
      <MainSliderLayout>
        <ReactScrollWheelHandler
          rightHandler={() => {
            if (posterIdx > 0) setPosterIdx(posterIdx - 1);
          }}
          leftHandler={() => {
            if (posterIdx < carouselData.length - 1) setPosterIdx(posterIdx + 1);
          }}
        >
          <Cards posterIdx={posterIdx}>
            {carouselData.map(({ posterImage, title, startDate, endDate }) => {
              return (
                <CardLayout
                  posterImage={posterImage}
                  title={title}
                  endDate={endDate}
                  startDate={startDate}
                  key={title}
                ></CardLayout>
              );
            })}
          </Cards>
        </ReactScrollWheelHandler>
      </MainSliderLayout>
      <SliderNav>
        <Slidebar>
          <CurrentSlide posterIdx={posterIdx}></CurrentSlide>
        </Slidebar>
      </SliderNav>
    </SliderLayout>
  );
}
const CardLayout = ({ posterImage, title, startDate, endDate }) => {
  return (
    <Card>
      <Poster src={posterImage} draggable={false}></Poster>
      <Title>{title}</Title>
      <Date>
        {startDate} - {endDate}
      </Date>
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
  transform: ${(props) => `translateX(${97.5 - props.posterIdx * 203}px)`};
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
  transform: ${(props) => `translateX(${-1.5 + props.posterIdx * 36}px)`};
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
