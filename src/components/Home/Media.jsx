import React, { useState } from 'react';
import styled from 'styled-components';
import { SubHeader } from './SubSlider';
import { ReactComponent as LeftArrowIcon } from '../../assets/logos/icon_media_left_arrow.svg';
import { ReactComponent as RightArrowIcon } from '../../assets/logos/icon_media_right_arrow.svg';
export default function Media() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <StyledMediaWrapper>
      <SubHeader media={true} title={'미디어'}></SubHeader>
      <StyledMediaContentContainer>
        <StyledMediaNavContainer>
          <StyledMediaNav>
            <StyledMediaBtn
              className={selectedIndex === 0 ? 'selected' : null}
              onClick={() => setSelectedIndex(0)}
            >
              Youtube
            </StyledMediaBtn>
            <StyledMediaBtn
              className={selectedIndex === 1 ? 'selected' : null}
              onClick={() => setSelectedIndex(1)}
            >
              알림판
            </StyledMediaBtn>
            <StyledMediaBtn
              className={selectedIndex === 2 ? 'selected' : null}
              onClick={() => {
                setSelectedIndex(2);
              }}
            >
              보도자료
            </StyledMediaBtn>
          </StyledMediaNav>
          <StyledLine>
            <StyledFocus selectedIndex={selectedIndex}></StyledFocus>
          </StyledLine>
        </StyledMediaNavContainer>
        <StyledMedia>
          <a href="https://www.youtube.com/watch?v=EdR8jqDDqGY">
            <StyledArrow>
              <LeftArrowIcon />
              <RightArrowIcon />
            </StyledArrow>
            <StyledYoutube src="/banners/youtube_Img.png"></StyledYoutube>
          </a>
        </StyledMedia>
        <StyledMediaTitle>
          김대리가 알려주는 11월 기획 프로그램 #예술의 전당 #seoulartcenter
        </StyledMediaTitle>
        <StyledMediaDate>2022.10.26</StyledMediaDate>
      </StyledMediaContentContainer>
    </StyledMediaWrapper>
  );
}
const StyledMediaWrapper = styled.article`
  margin: 0 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 20.9375rem;
  height: 20.9375rem;
`;
const StyledMediaNavContainer = styled.section`
  height: 1.5625rem;
  margin-bottom: 0.375rem;
`;
const StyledMediaNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 0.1875rem;
  height: 1.25rem;
  margin-bottom: 0.3125rem;
  .selected {
    height: 1.25rem;
    font-weight: 600;
    color: #ffffff;
  }
`;
const StyledMediaBtn = styled.button`
  background-color: unset;
  border: unset;
  width: 6.875rem;
  height: 1.125rem;
  font-weight: 400;
  font-size: 0.9375rem;
  display: flex;
  align-items: center;
  text-align: center;
  color: #62626a;
  flex: none;
  flex-grow: 0;
  justify-content: center;
  padding: 0;
`;
const StyledLine = styled.div`
  width: 20.875rem;
  height: 0.0437rem;
  background-color: #62626a;
  position: relative;
`;
const StyledFocus = styled.div`
  position: absolute;
  width: 6.8544rem;
  height: 0.125rem;
  left: ${(props) => `${props.selectedIndex * 113}px`};
  background-color: #ffffff;
  top: -0.0625rem;
`;
const StyledMedia = styled.article`
  height: 12.4375rem;
  position: relative;
  margin-bottom: 0.5625rem;
`;
const StyledArrow = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 23.4375rem;
  height: 3.0625rem;
  left: 0rem;
  top: 5rem;
  align-items: center;
  padding: 0 0.6375rem;
`;
const StyledYoutube = styled.img`
  margin: 0.5625rem 1.25rem 0rem 1.25rem;
  width: 20.9375rem;
  height: 11.875rem;
`;
const StyledMediaContentContainer = styled.div`
  height: 18.5625rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledMediaTitle = styled.div`
  width: 20.9375rem;
  height: 2.5rem;
  font-weight: 600;
  font-size: 0.9375rem;
  line-height: 135%;
  color: #e2e2e2;
  margin: 0;
`;
const StyledMediaDate = styled.div`
  width: 3.4375rem;
  height: 0.8125rem;
  font-weight: 300;
  font-size: 0.6875rem;
  line-height: 0.8125rem;
  margin: 0.5625rem 0 0 1.3125rem;
  align-self: flex-start;
  display: flex;
  align-items: center;
  text-align: right;
  color: #62626a;
`;
