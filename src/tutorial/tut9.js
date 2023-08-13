import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NaverMapAPI from "../components/NaverMapApi";
import { Container as MapDiv, NaverMap } from "react-naver-maps";
import Header2 from "../components/Header2";
import Park from "../images/park_enter.svg"
import Place from "../images/place_bus_station.svg"
import SmallList from "../images/bottomlistsmall.svg"
import Finger from "../images/finger.svg"




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
  position: relative;
  z-index : 0;
`;

const GuideContainer = styled.div`
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
  line-height: 150%;
  text-align: center;
`;

const TextContainer = styled.div`
    white-space: pre-line;
`;


const Button = styled.button`
  margin-top: 15px;
  margin-left : 10px;
  margin-right :10px;
  padding: 10px 5px;
  width : 260px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size : 20px;
  font-weight : 500;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const guideText = (
    <>
      지도 보는 연습이 충분히 되었나요?
    </>
);

function Tut9() {
    const { naver } = window;

    return (
        <Container>
            <Header2
            title="지도 연습해보기"
            subtitle="1. 길 검색해서 찾기"
            />
            <div>
                <img src={Park} alt="검색결과" style={{ display: "block", margin: 0}}/>
                <img src={Place} alt="장소버스 정류장" style={{ display: "block", margin: 0}}/>
            </div>
            <MapDiv
            style={{width: '100%',height: '800px', display: 'flex',justifyContent: 'center',}}
            >
                <NaverMap />
            </MapDiv>
            <div
            style={{display: 'flex',justifyContent: 'center', zIndex:2,}}
            >
                <img
                src={SmallList}
                alt="축소된검색리스트"
                style={{display: "block", bottom : -8, margin : 0,padding : 0}}
                className="overlay"
                />
            </div>

            <GuideContainer style={{zIndex:4}} className="overlay">
                <TextBox>
                    <TextContainer>{guideText}</TextContainer>
                    <div style={{display:'flex', flexDirection: 'column'}}>
                        <Link to="/tutorial1/tut10">
                            <Button style={{ backgroundColor: '#1638E8'}}>
                                네, 충분히 됐어요.
                            </Button>
                        </Link>
                        <Link to="/tutorial1/tut6">
                            <Button style={{ backgroundColor: '#808080'}}>
                                아니요, 한 번 더 해볼래요.
                            </Button>
                        </Link>
                    </div>
                </TextBox>
            </GuideContainer>
        </Container>
    );     
}

export default Tut9;