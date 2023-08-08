// 헤더2

import React from 'react';
import styled from 'styled-components';
// import YourSVGComponent from './your-svg-file.svg'; // SVG 파일을 컴포넌트로 불러옴
// import Header_X from './header_X.svg';
import Icon from './header_X';

// 헤더박스
const HeaderWrapper = styled.header`
  box-sizing: border-box;  
  width: 393px;
  height: 115px;
  background-color: #2C2C2C;
  color: white;
  padding: 0px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

// 제목
const Title = styled.div`
  font-size: 23px;
  font-weight: 600;
  margin-bottom: 6px;
  margin-top: 45px;
`;

// 부제
const Subtitle = styled.div`
  font-size: 20px;
  font-weight: normal;
  margin-top: 0px;
`;

// X 버튼
const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 20px;
  color: white;
  position: absolute;
  top: 68px;
  left: 345px;
  z-index : 1;
`;


function Header2({ title, subtitle }) {
    const handleButtonClick = () => {
      // 나중에 함수추가
    };

    return (
      <HeaderWrapper>
        {/* 제목 */}
        <Title>{title}</Title>
        {/* 소제목 */}
        <Subtitle>{subtitle}</Subtitle>
        {/* X 버튼 */}
        {/* <CloseButton onClick={handleButtonClick}>
          <img src={Header_X} alt="X" />
        </CloseButton> */}
        <CloseButton>
        <Icon />
        </CloseButton>
      </HeaderWrapper>
    );
  }
  
export default Header2;


