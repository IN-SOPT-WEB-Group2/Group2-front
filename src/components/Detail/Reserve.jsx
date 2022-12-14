import { React, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import ShareIcon from '../../assets/logos/icon_share.svg';
import EmptyLikeIcon from '../../assets/logos/icon_like_empty.svg';
import FillLikeIcon from '../../assets/logos/icon_like_fill.svg';
import CompleteImage from '../../assets/logos/예매 완료.svg';

export default function Reserve() {
  const [like, setLike] = useState(false);
  const [image, setImage] = useState(EmptyLikeIcon);
  const [reservation, setReservation] = useState(false);
  const [bgColor, setBgColor] = useState('#ED1A3B');
  const [hidden, setHidden] = useState(true);

  const onClickLike = () => {
    like ? setImage(EmptyLikeIcon) : setImage(FillLikeIcon);
    setLike((prev) => !prev);
  };

  const onClickReserve = (e) => {
    reservation ? setBgColor('#ED1A3B') : setBgColor('#41414d');
    reservation ? (e.target.innerHTML = '예매하기') : (e.target.innerHTML = '취소하기');

    if (!reservation) {
      setHidden((prev) => !prev);
      setTimeout(() => {
        setHidden((prev) => !prev);
      }, 3000);
    }
    setReservation((prev) => !prev);
  };

  return (
    <>
      <StyledContainer>
        <StyledWrap>
          <StyledReserveBtn onClick={onClickReserve} bgColor={bgColor}>
            예매하기
          </StyledReserveBtn>
          <StyledIconWrap>
            <StyledIcon src={ShareIcon} alt="공유 아이콘" />
            <StyledIcon src={image} alt="좋아요 아이콘" onClick={onClickLike} />
          </StyledIconWrap>
        </StyledWrap>
      </StyledContainer>
      <StyledCompleteImage src={CompleteImage} alt="예매완료" hidden={hidden} fadein={fadein} />
    </>
  );
}

const StyledContainer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23.4375rem;
  height: 4rem;

  background-color: ${({ theme }) => theme.colors.white};
  border: 0.0625rem solid #e2e2e2;
`;

const StyledWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20.9375rem;
`;

const StyledReserveBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13.5725rem;
  height: 2.5625rem;
  border-radius: 2.625rem;
  border: none;
  font-size: 1.0625rem;
  font-weight: 600;
  line-height: 1.2681rem;
  background-color: ${(props) => props.bgColor};
  color: ${({ theme }) => theme.colors.white};
`;

const StyledIcon = styled.img`
  cursor: pointer;
`;
const StyledIconWrap = styled.div`
  margin-left: 0.8025rem;
`;

const StyledCompleteImage = styled.img`
  position: fixed;
  bottom: 3.6875rem;
  z-index: 99;
  animation: ${(props) => props.fadein} 0.5s;
`;

const fadein = keyframes`
  from{
    opacity:0;
  }
  to{
    opacity: 1;
  }
`;
