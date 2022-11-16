import React from 'react';
import styled from 'styled-components';

import { ReactComponent as LeftArrowLogo } from '../../assets/logos/left-arrow.svg';
import { ReactComponent as RightArrowLogo } from '../../assets/logos/right-arrow.svg';

export default function DateInfo() {
  return (
    <InfoContainer>
        <ArrowButton>
            <LeftArrowLogo />
        </ArrowButton>
        <InfoTitle>2022년 11월</InfoTitle>
        <ArrowButton>
            <RightArrowLogo />
        </ArrowButton>
    </InfoContainer>
  )
}

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 234px;
    margin: 16px auto 8px;
`

const ArrowButton = styled.article`
    background-color: var(--color-white);
    border: 1px solid #E2E2E2;
    border-radius: 50%;
    width: 34px;
    height: 34px;
    margin-top: 7px;
    cursor: pointer;
    svg {
        margin-left: 12px;
    }
`

const InfoTitle = styled.h2`
    font-weight: 600;
    font-size: 19px;
    line-height: 23px;
    padding: 12.5px 0;
`