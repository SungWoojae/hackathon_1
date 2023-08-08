import React from 'react';
import styled from 'styled-components';
import excercise_road4_top from './images/excercise_road4_top.svg';
import alert_success from './images/alert_success.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 393px;
  height: 852px;
  margin: 0;
  position: relative; /* 추가된 부분 */
`;

const Road4Top = styled.div`
  width: 100%;
  height: 120px;
  flex-shrink: 0;
  background-image: url(${excercise_road4_top});
  background-size: contain;
  background-repeat: no-repeat;
`;

const AlertSuccess = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${alert_success});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Exercise_road_4 = () => {
    return (
        <Container>
            <Road4Top />
            <AlertSuccess />
        </Container>
    );
};

export default Exercise_road_4;
