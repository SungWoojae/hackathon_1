import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import NaverMapAPI from "../components/NaverMapApi";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import Mission from '../components/Mission'
import '../maphome.css'; 
import hamburger from "../images/hamburger.svg";

import sideicon from "..//images/side_icon.svg";
import location from "../images/location.svg";
import { Link } from "react-router-dom";
import { Container as MapDiv, NaverMap, NavermapsProvider } from 'react-naver-maps';
import { NaverMapsProvider } from 'react-naver-maps';
import exercise_road1_bottom from '../images/exercise_road1_bottom.svg'; // Import the image here
import exercise_road0_alert from '../images/exercise_road0_alert.svg'; // Path to the image

function Exercise_road_0() {
    const [showImage, setShowImage] = useState(true); // State to track whether to show the image or not
    const history = useHistory();
    const [searchValue, setSearchValue] = useState(""); // 입력된 내용을 저장할 상태
    const [submitted, setSubmitted] = useState(false); // 양식 제출 여부를 저장할 상태

    const { naver } = window;

    const handleImageClick = () => {
        setShowImage(false); // Hide the image when clicked
    }

    // const handleSearch = (event) => {
    //     event.preventDefault(); // Prevent form submission
    //     const searchValue = event.target.elements.search.value;
        
    //     // Check if the search value matches "창천문화공원"
    //     if (searchValue === "창천문화공원") {
    //         history.push("/excercise_road_2"); // Navigate to the excercise2 route
    //     }
    // }

    return (
        <div className="container">
            <Header title="지도 연습해보기" subtitle="1. 길 검색해서 찾기" />
            <MapDiv
                className="map"
                style={{
                    width: '100%',
                    height: '800px',
                }}
            >
                <div className="overlay">           
                    <div className="search-box">
                        {/* <form onSubmit={handleSearch} name="searchform">    
                            <input type="text" className="search" placeholder="장소, 버스, 지하철, 주소 검색" />
                            <img src={hamburger} alt="" className="search-image"></img>
                        </form> */}
                        <form
                            onSubmit={(event) => {
                                event.preventDefault();
                                setSubmitted(true);

                                if (searchValue === "창천문화공원") {
                                    history.push("/excercise_road_2");
                                }
                            }}
                            name="searchform"
                        ><input type="text" className="search" placeholder="장소, 버스, 지하철, 주소 검색" />
                        <img src={hamburger} alt="" className="search-image"></img></form>
                    </div>
                    
                    <div className="tab-list">
                        <Tabs name="음식점"></Tabs>
                        <Tabs name="카페"></Tabs>
                        <Tabs name="주유소"></Tabs>
                        <Tabs name="펜션"></Tabs>
                    </div>
                    
                    {showImage && (
                        <img
                            src={exercise_road0_alert}
                            alt=""
                            style={{ display: "block", margin: "0 auto", cursor: "pointer" }}
                            onClick={handleImageClick}
                        />
                    )}
                    
                    
                    <img src={sideicon} alt="" className="side-icon"></img>
                    
                </div>
                <NaverMap />
                <Mission />
            </MapDiv>
            <img src={exercise_road1_bottom} alt="" />

            
        </div>
    );
}

export default Exercise_road_0;