import React from 'react';
import { ReactComponent as MainIconGray } from '../assets/logos/image_logo_gray.svg';
import styled from 'styled-components';

export default function Footer() {
  const footerList = ['사이트 맵', '오시는 길', '주차 안내', '정보 공개', '개인정보 처리방침'];
  return (
    <MainFooter>
      <FooterNav>
        <FooterList>
          {footerList.map((item) => {
            return <FooterItem key={item}>{item}</FooterItem>;
          })}
        </FooterList>
      </FooterNav>
      <FooterArticle>
        <MainIconGray margin-top="28px" />
        <FooterBox>
          <p>
            {'('}우{')'} 06757 서울시 서초구 남부순환로 2406 예술의 전당
          </p>
          <p>
            {' '}
            대표자 | 장형준{'\n'} 사업자 등록번호 {'|'}
            214-82-00264{'\n'} 통신판매업 신고 | 서초 제 0706호
          </p>
          <p>
            예술의 전당 콜센터 : 02-580-1300 {'('}
            09:00-20:00 | 연중 무휴{')'}
          </p>
        </FooterBox>
      </FooterArticle>
    </MainFooter>
  );
}
const MainFooter = styled.footer`
  height: 21rem;
  text-align: center;
  width: 100%;
  * {
    font-family: 'Pretendard';
    font-style: normal;

    font-size: 10px;
    line-height: 143.52%;
  }
`;
const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  height: 8.75rem;
  background-color: #1d2235;
`;
const FooterList = styled.ul`
  display: flex;
  width: 20rem;
  margin-top: 1.9375rem;
`;
const FooterItem = styled.li`
  &:not(:last-child)::after {
    content: '|';
    font-size: 0.0625rem;
    margin: 11px;
  }
  font-weight: 500;
  color: #949494;
  flex-shrink: 0;
  height: 0.875rem;
`;
const FooterArticle = styled.article`
  background-color: #131112;
  height: 12.25rem;
  .svg {
    margin-top: 1.75rem;
    margin-bottom: 1rem;
  }
`;
const FooterBox = styled.div`
  font-weight: 400;
  white-space: pre-line;
  text-align: center;
  color: #62626a;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 5.25rem;
`;
