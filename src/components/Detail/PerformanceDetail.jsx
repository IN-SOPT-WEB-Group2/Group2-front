import { React, useState } from 'react';
import styled from 'styled-components';
import DropDown from '../../assets/logos/icon_arrow_down.svg';
import Upward from '../../assets/logos/icon_arrow_upward.svg';
import DetailImage from '../../assets/logos/Image_Detail.png';

export default function PerformanceDetail() {
  const onClickViewMore = () => {
    if (height === '691px') {
      setHeight('100%');
      setText('설명 접기');
      setIcon(Upward);
    } else {
      setHeight('691px');
      setText('설명 더보기');
      setIcon(DropDown);
    }
  };

  const [height, setHeight] = useState('691px');
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
      <StyledImageWrap src={DetailImage} alt="작품상세정보 이미지" height={height} />
      <StyledViewMoreBtn onClick={onClickViewMore}>
        <span>{text}</span>
        <StyledViewMoreIcon src={icon} alt="더보기" />
      </StyledViewMoreBtn>
      <StyledWrap>
        <StyledTitle>작가 소개</StyledTitle>
        <StyledContent>
          헬가 스텐첼은 영국에서 활동하는 예술가로, 일러스트, 사진, 비디오, 스톱 모션 애니메이션 등
          다양한 매체와 미디어를 활용하여 &quot;집안의 초현실주의&quot;라는 주제로 일상에서 사용되는
          오브제에 재치있는 아이디어로 생명력을 불어넣는 작업을 한다.
        </StyledContent>
        <StyledContent>
          BBC, 혼다, O2 등 글로벌 브랜드와의 협업을 진행하였으며 2020년에는 &quot;올해의 푸드 아트
          크리에이터&quot; 상을 수상했다.
        </StyledContent>
      </StyledWrap>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin-top: 30px;
`;

const StyledWrap = styled.div`
  margin-top: 25px;
`;

const StyledTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  line-height: 135%;
  margin-top: 25px;
  padding: 0 20px;
  color: #232323;
`;
const StyledContent = styled.div`
  font-size: 15px;
  line-height: 140%;
  margin-top: 8px;
  padding: 0 20px;
  color: #000000;
`;

const StyledImageWrap = styled.img`
  width: 100%;
  height: ${(height) => height};
  margin-top: 14px;
  object-fit: cover;
  object-position: left top;
`;

const StyledViewMoreBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 55px;
  font-size: 15px;
  line-height: 17.9px;
  padding: 0;
  background-color: #e2e2e2;
  color: #949494;
  border: none;
`;

const StyledViewMoreIcon = styled.img`
  margin-left: 7px;
`;
