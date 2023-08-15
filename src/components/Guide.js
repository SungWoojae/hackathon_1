import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 350px;
  position: absolute;
  bottom: 65px;
`;

const TextBox = styled.div`
  box-sizing: border-box;  
  width: 350px;
  border-radius: 10px;
  padding: 25px;
  background-color: black;
  color: white;
  font-size: 19px;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
`;

function Guide({ text }) {
  const TextContainer = styled.div`
    white-space: pre-line; /* 줄바꿈 표시를 위한 스타일 */
  `;
  return (
    <Container>
      <TextBox>
        <TextContainer>{text}</TextContainer>
      </TextBox>
    </Container>
  );
}

export default Guide;
