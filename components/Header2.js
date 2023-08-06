// 헤더2

import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  box-sizing: border-box;  
  width: 393px;
  height: 115px;
  background-color: #black;
  color: white;
  padding: 15px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 50px;
`;

const Subtitle = styled.div`
  font-size: 20px;
  font-weight: normal;
  margin-top: 85px;
`;

function Header2({ title, subtitle }) {
    return (
      <HeaderWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </HeaderWrapper>
    );
  }
  
export default Header2;