import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowIcon } from '../../assets/logos/icon_화살표.svg';
import { ReactComponent as ExhibitIcon } from '../../assets/logos/icon_이번주공연전시.svg';
import { ReactComponent as TicketIcon } from '../../assets/logos/icon_티켓오픈.svg';
import { ReactComponent as NoticeIcon } from '../../assets/logos/icon_공지사항.svg';
import { ReactComponent as MediaIcon } from '../../assets/logos/icon_미디어.svg';
import { ReactComponent as LocationIcon } from '../../assets/logos/icon_위치_W.svg';
import { ReactComponent as CalenderIcon } from '../../assets/logos/icon_캘린더_W.svg';
function SubSlider({ media, exhibit, notice, ticket, title, moreInfo, data }) {
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
        {data.length
          ? data.map(({ posterImage, title, tag, endDate, startDate, locationDetail }) => {
              return (
                <SubSliderCard
                  posterImage={posterImage}
                  locationDetail={locationDetail}
                  title={title}
                  tag={tag}
                  startDate={startDate}
                  endDate={endDate}
                  key={title}
                ></SubSliderCard>
              );
            })
          : null}
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
const SubSliderCard = ({ posterImage, tag, title, endDate, startDate, locationDetail }) => {
  return (
    <StyledSubSliderCard>
      <StyledImg src={posterImage}>
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
  padding: 0rem;
  gap: 1.5rem;
  width: 22.1875rem;
  height: 21.1875rem;
`;
const StyledSubHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.625rem;
  width: 20.9375rem;
  height: 1.375rem;
`;
const StyledSlideInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 0rem;
  gap: 5.1875rem;
  width: 18.9375rem;
  height: 1.375rem;
`;
const StyledSlideName = styled.p`
  height: 1.375rem;
  width: 7.3125rem;
  letter-spacing: -0.0063rem;
  font-weight: 700;
  font-size: 1.0625rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
  text-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const StyledMoreInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.4375rem;
  width: 6.4375rem;
  height: 1.375rem;
  flex: none;
  order: 1;
  flex-grow: 0;
`;
const StyledMoreInfoContent = styled.div`
  width: 5.375rem;
  height: 1.375rem;
  font-size: 0.9375rem;
  line-height: 1.125rem;
  display: flex;
  align-items: center;
  justify-content: right;
  color: ${({ theme }) => theme.colors.white_secondary};
  flex: none;
  order: 0;
  flex-grow: 0;
`;
const StyledSubSliderCards = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.75rem;
  width: 21.875rem;
  height: 18.3125rem;
  flex: none;
  order: 1;
  flex-grow: 0;
  white-space: pre;
  overflow-y: hidden;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const StyledSubSliderCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  width: 9.375rem;
  height: 18.3125rem;
`;
const StyledImg = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  width: 9.375rem;
  height: 11.9375rem;
  border-radius: 0.3125rem;
  position: relative;
`;
const StyledType = styled.div`
  position: absolute;
  width: 3.4375rem;
  height: 1.6875rem;
  left: 5.375rem;
  top: 9.6875rem;
  background: ${({ theme }) => theme.colors.background};
  padding: 0.25rem;
  text-align: center;
`;
const StyledText = styled.div`
  height: 1.1875rem;
  font-weight: 500;
  font-size: 0.8125rem;
  line-height: 143.52%;
  color: ${({ theme }) => theme.colors.white};
  display: inline-block;
`;
const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0rem;
  gap: 0.3125rem;
  width: 9.375rem;
  height: 4.375rem;
`;
const StyledTitle = styled.p`
  width: 9.375rem;
  white-space: pre-line;
  font-weight: 600;
  font-size: 0.9375rem;
  line-height: 135%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white_secondary};
`;
const StyledDateLocation = styled.div`
  width: 9.375rem;
  height: 2.8125rem;
`;
const StyledDate = styled.div`
  width: 9.375rem;
  height: 1.375rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;
`;
const StyledLocation = styled(StyledDate)`
  height: 1.25rem;
  margin-top: 0.125rem;
`;
const StyledCalenderIcon = styled.div`
  width: 1.25rem;
  height: 1.375rem;
`;
const StyledLocationIcon = styled(StyledCalenderIcon)`
  height: 1.25rem;
`;
const StyledLocationText = styled.p`
  width: 5.375rem;
  height: 0.8125rem;
  font-weight: 300;
  font-size: 0.6875rem;
  line-height: 0.8125rem;
  color: ${({ theme }) => theme.colors.white_secondary};
`;
const StyledDateText = styled(StyledLocationText)`
  width: 7.125rem;
  height: 0.8125rem;
`;
export { SubSlider, SubHeader };
