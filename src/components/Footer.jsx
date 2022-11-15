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
        <MainIconGray />
      </FooterArticle>
    </MainFooter>
  );
}
const MainFooter = styled.footer`
  height: 21rem;
  text-align: center;
  width: 100%;
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
  font-size: 10px;
  line-height: 143.52%;
  color: #949494;
  flex-shrink: 0;
  height: 0.875rem;
`;
const FooterArticle = styled.article``;
