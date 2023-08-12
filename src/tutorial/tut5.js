import React from "react";
import styled from "styled-components";
import NaverMapAPI from "../components/NaverMapApi";
import { Container as MapDiv, NaverMap } from "react-naver-maps";
import Header2 from "../components/Header2";
import Park from "../images/park_enter.svg"
import Place from "../images/place_bus_station.svg"
import List from "../images/bottom_placelist.svg"
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





function Tut5() {
    const { naver } = window;

    return (
        <Container>
            <Header2
            title="지도 연습해보기"
            subtitle="1. 길 검색해서 찾기"
            />
        <div>
            <img
            src={Park}
            alt="검색결과"
            style={{ display: "block", margin: 0}}
            />
            <img
            src={Place}
            alt="장소버스 정류장"
            style={{ display: "block", margin: 0}}
            />
        </div>
        <MapDiv
        style={{width: '100%',height: '800px', display: 'flex',justifyContent: 'center',
        }}
        >
        <NaverMap />
        </MapDiv>
        <div
        style={{display: 'flex',justifyContent: 'center', zIndex:2,}}
        >
            <img
            src={List}
            alt="검색리스트"
            style={{display: "block", bottom : -8, margin : 0,padding : 0}}
            className="overlay"
            />
        </div>


        </Container>
    );
       
}

export default Tut5;
