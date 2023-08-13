import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import NaverMapAPI from "../components/NaverMapApi";
import Header2 from "../components/Header2";
import Tabs from "../components/Tabs";
import Mission from '../components/Mission'
import '../maphome.css'; 
import hamburger from "../images/hamburger.svg";
import stt_icon from "../images/exercise0_mic.svg";

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

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';




function Exercise_road_0() {
    const [showImage, setShowImage] = useState(true); // State to track whether to show the image or not
    const history = useHistory();
    const [searchValue, setSearchValue] = useState(""); // 입력된 내용을 저장할 상태
    const [submitted, setSubmitted] = useState(false); // 양식 제출 여부를 저장할 상태

    const { naver } = window;
    const { transcript } = useSpeechRecognition();

    const handleImageClick = () => {
        setShowImage(false); // Hide the image when clicked
    }

    const handleSearch = (event) => {
        event.preventDefault(); // Prevent form submission
        const searchValue = event.target.elements.search.value;
        
        // Check if the search value matches "창천문화공원"
        if (searchValue === "창천문화공원") {
            history.push("/exercise_road_2"); // Navigate to the excercise2 route
        }  //else if (transcript) { // Check if there's a transcript from speech recognition
        //     setSearchValue(transcript); // Set the transcript as the search value
        // }
    }

    // const voiceRecognition = () => {
        
        
    
    
 
        
        

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
                        <form onSubmit={handleSearch} name="searchform">    
                            <input type="text" className="search" name="search" placeholder="장소, 버스, 지하철, 주소 검색" value={searchValue}/>                            <img src={hamburger} alt="" className="search-image"></img>
                            <img src={stt_icon} alt="" className="stt" onClick={SpeechRecognition.startListening}></img>
                        </form>
                    </div>
                    
                    <div className="tab-list">
                        <Tabs name="음식점" image={Food}></Tabs>
                        <Tabs name="카페" image={Cup}></Tabs>
                        <Tabs name="주유소" image={Gas}></Tabs>
                        <Tabs name="펜션" image={Bedroom}></Tabs>
                    </div>
                    {showImage && (
                        <img
                            src={exercise_road0_alert}
                            alt=""
                            style={{ cursor: "pointer", zIndex: 4 }}
                            onClick={handleImageClick}
                        />
                    )}
                </div>
                   
                <NaverMap 
                    center={{lat: 37.558, lng: 126.9368}}
                />
            </MapDiv>
            <img src={exercise_road1_bottom} alt="" />
        </div>
    );
}

export default Exercise_road_0;