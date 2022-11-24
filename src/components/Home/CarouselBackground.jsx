import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';
import MainHeader from '../MainHeader';
import { useGetAllMainInfo } from '../../api/main';
export default function CarouselBackground() {
  const [posters, setPosters] = useState([]);
  const [carouselData, setCarouselData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await useGetAllMainInfo();
      const slicedData = data.slice(0, 5);
      setCarouselData([...slicedData]);
      let slicedPosters = [];
      slicedData.map((data) => {
        slicedPosters.push(data.posterImage);
      });
      setPosters([...slicedPosters]);
    };
    getData();
  }, []);
  const [posterIdx, setPosterIdx] = useState(0);
  return (
    <HomeLayout>
      <BlurredBack posters={posters} posterIdx={posterIdx} src={posters[posterIdx]}></BlurredBack>
      <Section></Section>
      <Article>
        <MainHeader main={true} />
        <Carousel
          setPosterIdx={setPosterIdx}
          posterIdx={posterIdx}
          carouselData={carouselData}
        ></Carousel>
      </Article>
    </HomeLayout>
  );
}
const HomeLayout = styled.div`
  position: relative;
  overflow: hidden;
`;
const BlurredBack = styled.img`
  background-color: rgba(0, 0, 0, 0.55);
  background-repeat: no-repeat;
  width: 24.875rem;
  height: 34rem;
  left: -0.6875rem;
  top: -1.6875rem;
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
  z-index: -1;
`;
const Article = styled.article`
  backdrop-filter: blur(0.625rem);
  height: 26.6875rem;
  > header {
    background-color: transparent;
  }
`;
