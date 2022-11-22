import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from '../../assets/logos/icon_화살표.svg';
import { ReactComponent as ExhibitIcon } from '../../assets/logos/icon_이번주공연전시.svg';
import { ReactComponent as TicketIcon } from '../../assets/logos/icon_티켓오픈.svg';
import { ReactComponent as NoticeIcon } from '../../assets/logos/icon_공지사항.svg';
import { ReactComponent as MediaIcon } from '../../assets/logos/icon_미디어.svg';
import { ReactComponent as LocationIcon } from '../../assets/logos/icon_위치_W.svg';
import { ReactComponent as CalenderIcon } from '../../assets/logos/icon_캘린더_W.svg';

function SubSlider({ media, exhibit, notice, ticket, title, moreInfo }) {
  return (
    <StyledSubSlider>
      <SubHeader
        media={media}
        exhibit={exhibit}
        notice={notice}
        ticket={ticket}
        title={title}
        moreInfo={moreInfo}
      ></SubHeader>
      <StyledSubSliderCards>
        <SubSliderCard
          src={'/posters/4.드림어빌리티_포스터.jpg'}
          tag="전시"
          title={'뮤지컬 브로드웨이 콘서트입니다'}
          endDate={'2022.03.10'}
          startDate={'2022.02.15'}
        ></SubSliderCard>
        <SubSliderCard
          src={'/posters/4.드림어빌리티_포스터.jpg'}
          tag="전시"
          title={'뮤지컬 브로드웨이 콘서트입니다'}
          endDate={'2022.03.10'}
          startDate={'2022.02.15'}
        ></SubSliderCard>
        <SubSliderCard
          src={'/posters/4.드림어빌리티_포스터.jpg'}
          tag="전시"
          title={'뮤지컬 브로드웨이 콘서트입니다'}
          endDate={'2022.03.10'}
          startDate={'2022.02.15'}
        ></SubSliderCard>
        <SubSliderCard
          src={'/posters/4.드림어빌리티_포스터.jpg'}
          tag="전시"
          title={'뮤지컬 브로드웨이 콘서트입니다'}
          endDate={'2022.03.10'}
          startDate={'2022.02.15'}
        ></SubSliderCard>
      </StyledSubSliderCards>
    </StyledSubSlider>
  );
}
const SubHeader = ({ media, exhibit, notice, ticket, title, moreInfo }) => {
  return (
    <StyledSubHeader>
      {media && <MediaIcon></MediaIcon>}
      {notice && <NoticeIcon></NoticeIcon>}
      {exhibit && <ExhibitIcon></ExhibitIcon>}
      {ticket && <TicketIcon></TicketIcon>}
      <StyledSlideInfo>
        <StyledSlideName>{title}</StyledSlideName>
        <StyledMoreInfo>
          <StyledMoreInfoContent>{moreInfo ? moreInfo : '더보기'}</StyledMoreInfoContent>
          <ArrowIcon />
        </StyledMoreInfo>
      </StyledSlideInfo>
    </StyledSubHeader>
  );
};
const SubSliderCard = ({ src, tag, title, endDate, startDate, locationDetail }) => {
  return (
    <StyledSubSliderCard>
      <StyledImg src={src}>
        <StyledType>
          <StyledText>{tag}</StyledText>
        </StyledType>
      </StyledImg>
      <StyledInfo>
        <StyledTitle>{title}</StyledTitle>
        <StyledDateLocation>
          <StyledDate>
            <StyledCalenderIcon>
              <CalenderIcon />
            </StyledCalenderIcon>
            <StyledDateText>
              {startDate} - {endDate}
            </StyledDateText>
          </StyledDate>
          <StyledLocation>
            <StyledLocationIcon>
              <LocationIcon />
            </StyledLocationIcon>
            <StyledLocationText>{locationDetail}</StyledLocationText>
          </StyledLocation>
        </StyledDateLocation>
      </StyledInfo>
    </StyledSubSliderCard>
  );
};
const StyledSubSlider = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 355px;
  height: 339px;
`;
const StyledSubHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;
  width: 335px;
  height: 22px;
`;
const StyledSlideInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;
  gap: 83px;
  width: 303px;
  height: 22px;
`;
const StyledSlideName = styled.p`
  height: 22px;
  width: 7.3125rem;
  letter-spacing: -0.0063rem;
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const StyledMoreInfo = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 7px;
  width: 103px;
  height: 22px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
const StyledMoreInfoContent = styled.div`
  width: 86px;
  height: 22px;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  justify-content: right;
  color: #e2e2e2;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const StyledSubSliderCards = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
  width: 474px;
  height: 293px;
  flex: none;
  order: 1;
  flex-grow: 0;
  white-space: nowrap;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const StyledSubSliderCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  width: 150px;
  height: 293px;
`;

const StyledImg = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  width: 150px;
  height: 191px;
  border-radius: 5px;
  position: relative;
`;
const StyledType = styled.div`
  position: absolute;
  width: 55px;
  height: 27px;
  left: 86px;
  top: 155px;
  background: #41414d;
  padding: 4px;
  text-align: center;
`;
const StyledText = styled.div`
  width: 23px;
  height: 19px;
  font-weight: 500;
  font-size: 13px;
  line-height: 143.52%;
  color: #ffffff;
  display: inline-block;
`;
const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 5px;
  width: 150px;
  height: 70px;
`;
const StyledTitle = styled.p`
  width: 150px;
  white-space: pre-line;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 135%;
  display: flex;
  align-items: center;
  color: #e2e2e2;
`;
const StyledDateLocation = styled.div`
  width: 150px;
  height: 45px;
`;
const StyledDate = styled.p`
  width: 150px;
  height: 22px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;
const StyledLocation = styled(StyledDate)`
  height: 20px;
  margin-top: 0.125rem;
`;
const StyledCalenderIcon = styled.div`
  width: 20px;
  height: 22px;
  svg {
    width: 100%;
    height: 100%;
  }
`;
const StyledLocationIcon = styled(StyledCalenderIcon)`
  height: 20px;
`;

const StyledLocationText = styled.p`
  width: 86px;
  height: 13px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 300;
  font-size: 11px;
  line-height: 13px;
  color: #e2e2e2;
`;
const StyledDateText = styled(StyledLocationText)`
  width: 114px;
  height: 13px;
`;
export { SubSlider, SubHeader };
