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
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  text-align: center;
`;

function Guide({ text }) {
  return (
    <Container>
      <TextBox>{text}</TextBox>
    </Container>
  );
}

export default Guide;
