import React, { useState, useEffect } from "react";
import NaverMapAPI  from "./components/NaverMapApi";
import Header2 from "./components/Header2";
import Tabs from "./components/Tabs";
import Mission from './components/Mission'
import './maphome.css';
import hamburger from "./images/hamburger.svg";
import navigation from "./images/navigation.png";
import sideicon from "./images/side_icon.svg";
import location from "./images/location.svg";
import { Link } from "react-router-dom";
import { Container as MapDiv, NaverMap, NavermapsProvider } from 'react-naver-maps';
import { NaverMapsProvider } from 'react-naver-maps';

function Maphome() {
  const { naver } = window;

  return (
    <div className="container">
      <Header2 title="지도 연습해보기" subtitle="1. 길 검색해서 찾기"/>  
        <MapDiv
          className="map"
          style={{
            width: '100%',
            height: '800px',
          }}
        >
          <div className="overlay">
            <div className="search-box">
              <form method="post" name="searchform">
                <input type="text" className="search" placeholder="장소, 버스, 지하철, 주소 검색" /> 
                <img src={hamburger} alt="" className="search-image"></img>
              </form>
            </div>
            <div className="tab-list">
              <Tabs name="음식점"></Tabs>
              <Tabs name="카페"></Tabs>
              <Tabs name="주유소"></Tabs>
              <Tabs name="펜션"></Tabs>
            </div>
            <img src={sideicon} alt="" className="side-icon"></img>
          </div>
          <NaverMap />
          <Mission />
        </MapDiv>
      <img src={navigation} alt="" className="navigation"></img>
    </div>
  );
}

export default Maphome;
