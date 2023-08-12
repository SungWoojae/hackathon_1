import React from "react";
import styled from "styled-components";
import Finger from '../images/finger.svg';
import Maphome from "../newmaphome";
import exercise_road1_bottom from '../images/exercise_road1_bottom.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFFFFF;
  width: 393px;
  height: 852px;
  margin: 0;
  position: relative;
`;

function Tut2() {
  return (
    <Container>
      <Maphome
        style={{
          zIndex: -1,
        }}
      />

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 300,
          backgroundColor: "transparent",
        }}
      >
        <div
          style={{
            color: 'black',
            fontSize: 30,
            fontWeight: 900,
            textShadow: '1px 1px 1px 1px white',
          }}
        >
          터치해서 시작하기!
        </div>
        <img
          src={Finger}
          className="image"
          style={{
            width: '100px',
            height: '100px',
            marginLeft: 150,
          }}
        />
      </div>

      <img
        src={exercise_road1_bottom}
        alt=""
      />
    </Container>
  );
}

export default Tut2;
