import { React, useState } from 'react';
import styled from 'styled-components';
import DropDown from '../../assets/logos/icon_arrow_down.svg';
import Upward from '../../assets/logos/icon_arrow_upward.svg';

export default function PerformanceDetail({ data }) {
  const onClickViewMore = () => {
    if (height === '43.1875rem') {
      setHeight('100%');
      setText('설명 접기');
      setIcon(Upward);
    } else {
      setHeight('43.1875rem');
      setText('설명 더보기');
      setIcon(DropDown);
    }
  };

  const [height, setHeight] = useState('43.1875rem');
  const [text, setText] = useState('설명 더보기');
  const [icon, setIcon] = useState(DropDown);

  return (
    <StyledContainer>
      <StyledTitle>공지 사항</StyledTitle>
      <StyledContent>
        예술의 전당 유료회원(골드/블루/그린) : 20% 할인
        <br />
        예술의 전당 일반회원(싹틔우미, 노블) : 10% 할인
      </StyledContent>
      <StyledTitle>작품 설명</StyledTitle>
      <StyledImageWrap src={data.detailImage} alt="작품상세정보 이미지" height={height} />
      <StyledViewMoreBtn onClick={onClickViewMore}>
        <span>{text}</span>
        <StyledViewMoreIcon src={icon} alt="더보기" />
      </StyledViewMoreBtn>
      <StyledWrap>
        <StyledTitle>작가 소개</StyledTitle>
        <StyledContent>{data.detailInfo}</StyledContent>
      </StyledWrap>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin-top: 1.875rem;
`;

const StyledWrap = styled.div`
  margin-top: 1.5625rem;
`;

const StyledTitle = styled.div`
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 135%;
  margin-top: 1.5625rem;
  padding: 0 1.25rem;
  color: #232323;
`;
const StyledContent = styled.div`
  font-size: 0.9375rem;
  line-height: 140%;
  margin-top: 0.5rem;
  padding: 0 1.25rem;
  color: #000000;
`;

const StyledImageWrap = styled.img`
  width: 100%;
  height: ${(height) => height};
  margin-top: 0.875rem;
  object-fit: cover;
  object-position: left top;
`;

const StyledViewMoreBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.4375rem;
  font-size: 0.9375rem;
  line-height: 1.1187rem;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.gray3};
  color: #949494;
  border: none;
`;

const StyledViewMoreIcon = styled.img`
  margin-left: 0.4375rem;
`;
