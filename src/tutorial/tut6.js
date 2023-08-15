import React, { useRef, useState, useEffect } from 'react';
import styled from "styled-components";
import NaverMapAPI from "../components/NaverMapApi";
import { Container as MapDiv, NaverMap, Marker } from "react-naver-maps";
import { InfoWindow } from 'react-naver-maps';
import Header2 from "../components/Header2";
import Guide from '../components/Guide'
import exercise_road4_top from '../images/exercise_road4_top.svg';
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
                <img src={Park} alt="검색결과" style={{ display: "block", margin: 0}}/>
                <img src={Place} alt="장소버스 정류장" style={{ display: "block", margin: 0}}/>
            </div>

            {/* 지도영역 */}
            <MapDiv
            style={{width: '100%',height: '800px', display: 'flex',justifyContent: 'center',
            }}
            >
                <NaverMap 
                        zoom={13}
                        center={{lat:37.5250482, lng:126.9613142}}
                    >
                        <Marker 
                            position={{lat:37.5450482,lng: 126.9603142}} // 효창
                        />
                        <Marker 
                            position={{lat:37.5450482,lng: 126.9603142}}
                            icon={{
                                content: `
                                  <div style="background-color: white; padding: 8px; border-radius: 5px;">효창공원</div>',
                                `
                              }} // 효창
                        />
                        <Marker
                            position={{lat:37.5550482,lng: 126.9703142}}                      
                        ></Marker>
                        <Marker
                            position={{lat:37.5550482,lng: 126.9703142}}                      
                            icon={{
                                content: `
                                  <div style="background-color: white; padding: 8px; border-radius: 5px;">우제공원</div>',
                                `
                              }}
                        >
                        </Marker>
                        <Marker 
                            position={{lat:37.5400482,lng: 126.9500142}} // 효창
                        />
                        <Marker 
                            position={{lat:37.5400482,lng: 126.9500142}}
                            icon={{
                                content: `
                                  <div style="background-color: white; padding: 8px; border-radius: 5px;">화진공원</div>',
                                `
                              }} // 효창
                        />
                        <Marker 
                            position={{lat:37.5600482,lng: 126.9400142}} // 효창
                        />
                        <Marker 
                            position={{lat:37.5600482,lng: 126.9400142}}
                            icon={{
                                content: `
                                  <div style="background-color: white; padding: 8px; border-radius: 5px;">현진공원</div>',
                                `
                              }} // 효창
                        />        
                        <Marker 
                            position={{lat:37.5680482,lng: 126.98}} // 효창
                        />
                        <Marker 
                            position={{lat:37.5680482,lng: 126.98}}
                            icon={{
                                content: `
                                  <div style="background-color: white; padding: 8px; border-radius: 5px;">재은공원</div>',
                                `
                              }} // 효창
                        />                 
                        

                    </NaverMap>
            </MapDiv>

            {/* 하단이미지 */}
            <div
            style={{display: 'flex',justifyContent: 'center', zIndex:0,}}
            >
                <img
                src={SmallList}
                alt="축소된검색리스트"
                style={{display: "block", bottom : -8, margin : 0,padding : 0}}
                className="overlay"
                />
            </div>

            {/* 가이드 */}
            <Guide className="overlay" text={guideText} />

            {/* 성공창 */}
            <div>
                {showNewImage && (
                    <img
                    src={Success} alt="새 이미지"
                    style={{ display: "block", margin: 0, position: "absolute",top: "50%",left: "50%",transform: "translate(-50%, -50%)", // 정중앙으로 이동
                    zIndex: 4}}
                    className = "overlay"
                    />
                )}
            </div>
        </Container>
    );
       
}

export default Tut6;
