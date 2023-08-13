import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NaverMapAPI from "../components/NaverMapApi";
import { Container as MapDiv, NaverMap } from "react-naver-maps";
import Header2 from "../components/Header2";
import Guide from '../components/Guide'
import Park from "../images/park_enter.svg"
import Place from "../images/place_bus_station.svg"
import List from "../images/bottom_placelist.svg"
import SmallList from "../images/bottomlistsmall.svg"
import Finger from "../images/finger.svg"
import Success from "../images/alert_success.svg"




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
  display: flex;
  justify-content: center; 
  align-items: center; 
  position: absolute;
  bottom: 0px; 
  left: 0; 
  width: 100%; 
  z-index : 3;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const guideText = (
    <>
      한 손가락으로 지도를 움직이며<br />
      주변을 둘러봐요.
    </>
);

function Tut6() {
    const { naver } = window;

    // 성공창 띄우기
    const [showNewImage, setShowNewImage] = useState(false); // 상태 추가

    // 성공창 조건을 판단하고 처리하는 함수
    const handleShowChange = () => {
        setShowNewImage(true); // 이미지 변경 상태 업데이트
    };



    return (
        <Container onClick={handleShowChange}>
        {/* 클릭함수 임시지정 */}
            <Header2
            title="지도 연습해보기"
            subtitle="1. 길 검색해서 찾기"
            />
            <div>
                {/* 성공창 */}
                {showNewImage && (
                    <img
                    src={Success} alt="새 이미지"
                    style={{ display: "block", margin: 0}}
                    className = "overlay"
                    />
                )}
            </div>
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
            <div
                style={{position: "absolute", top: 0, display: "flex", justifyContent: "center", width: "393px", height: "852px"}}>
                <GuideContainer>
                    <Guide text={guideText}/>
                </GuideContainer>
            </div>
        </Container>
    );
       
}

export default Tut6;
