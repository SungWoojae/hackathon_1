import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import NaverMapAPI from "../components/NaverMapApi";
import Header2 from "../components/Header2";
import Tabs from "../components/Tabs";
import Mission from '../components/Mission'
import '../maphome.css'; 
import hamburger from "../images/hamburger.svg";
import Finger from '../images/finger.svg';

import location from "../images/location.svg";
import { Link } from "react-router-dom";
import { Container as MapDiv, NaverMap, NavermapsProvider } from 'react-naver-maps';
import { NaverMapsProvider } from 'react-naver-maps';
import exercise_road1_bottom from '../images/exercise_road1_bottom.svg'; // Import the image here
import exercise_road0_alert from '../images/exercise_road0_alert.svg'; // Path to the image
import Food from "../images/maphome_Food.svg";
import Cup from "../images/maphome_Cup.svg";
import Gas from "../images/maphome_Gas.svg";
import Bedroom from "../images/maphome_Bedroom.svg";

function Tut2() {
    const { naver } = window;

    return (
        <div className="container">
            <Header2 title="지도 연습해보기" subtitle="1. 길 검색해서 찾기" />
            <MapDiv
                className="map"
                style={{
                    width: '100%',
                    height: '800px',
                }}
            >
                <div className="overlay">           
                    <div className="search-box">
                        <form name="searchform">    
                            <input type="text" className="search" name="search" placeholder="장소, 버스, 지하철, 주소 검색" />
                            <img src={hamburger} alt="" className="search-image"></img>
                        </form>
                    </div>
                    
                    <div className="tab-list">
                        <Tabs name="음식점" image={Food}></Tabs>
                        <Tabs name="카페" image={Cup}></Tabs>
                        <Tabs name="주유소" image={Gas}></Tabs>
                        <Tabs name="펜션" image={Bedroom}></Tabs>
                    </div>
                    <Link to="/tutorial1/tut3" style={{ textDecoration: "none" }}>
                      <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: 400,
                          backgroundColor: "transparent",
                          padding: '70px 30px',
                        }}>
                        <div 
                          style={{
                            color: 'black',
                            fontSize: 35,
                            fontWeight: 900,
                            textShadow: "-2px -2px 0 white, 0px -2px 0 white, 2px -2px 0 white, 2px 0 0 white, 2px 2px 0 white, 0 2px 0 white, -2px 2px 0 white, -2px 0 0 white",
                          }}
                        >
                          터치해서 시작하기!
                        </div>
                        <img src={Finger} alt="" 
                          style={{
                            width: '100px',
                            height: '100px',
                            marginLeft: 150,
                          }}
                        />
                      </div>
                    </Link>
                </div>
                <NaverMap />
            </MapDiv>
            <img src={exercise_road1_bottom} alt="" />
        </div>
    );
}

export default Tut2;