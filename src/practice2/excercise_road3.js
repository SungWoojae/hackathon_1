import React from 'react';
import styled from 'styled-components';
import excercise_road3_top from './images/excercise_road3_top.svg';
import excercise_road3_top_icon from './images/excercise_road3_top_icon.svg';
import excercise_road3_bottom_follow from './images/excercise_road3_bottom_follow.svg';
import excercise_road3_bottom_detail from './images/excercise_road3_bottom_detail.svg';

import { useState, useRef } from 'react';
import { NavermapsProvider, Polyline } from 'react-naver-maps';
import { Container as MapDiv, NaverMap, Marker } from 'react-naver-maps';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 393px;
  height: 578px;
  margin: 0;
`;

const ExerciseRoad3Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
`;

const Road3Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopImage = styled.img`
  width: 412px;
  height: 134px;
  flex-shrink: 0;
`;

const TopIconImage = styled.img`
  width: 412px;
  height: 43px;
  flex-shrink: 0;
  object-fit: contain; /* 추가된 스타일: 이미지를 가로 세로 비율을 유지하며 박스에 맞추기 위함 */
`;

const BottomImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 16px;
  margin-bottom: 16px;
`;

const BottomDetailImage = styled.img`
  width: 108px;
  height: 49px;
  flex-shrink: 0;
  background: #596473;
`;

const FollowUpImage = styled.img`
  width: auto;
  height: auto;
  flex-shrink: 0;
  background: #2F6AE9;
`;







const Exercise_road_3 = () => {
    const routes = [{
      lat: 286, 
      lng: 56.102} , 
      {
        lat: 743, 
        lng: 364.518}, 
        {
          lat: 245, 
          lng : 71.836}, 
        {
          lat : 106, 
          lng : 47.697}, 
        {lat : 173, 
          lng : 56.617}, 
        {lat : 90, 
          lng : 40.498}, 
        {lat : 83, 
          lng : 42.685}];
    const departureRef = useRef({lat: 37.5603582, lng: 126.9367624});
    const arrivalRef = useRef({lat: 37.5567852, lng: 126.9355017});
    console.log(routes)
  
    return (
        <ExerciseRoad3Container>
            <Road3Top>
                <TopImage src={excercise_road3_top} alt="Exercise Road 3 Top" />
                <TopIconImage src={excercise_road3_top_icon} alt="Exercise Road 3 Top Icon" />
            </Road3Top>
            <Container>
              <NavermapsProvider
                ncpClientId={process.env.REACT_APP_NAVER_CLOUD_CLIENT_ID} 
                error={<p>Maps Load Error</p>}
                loading={<p>Maps Loading...</p>}
                submodules={["geocoder"]}
              >
              <MapDiv
              style={{
                height: 600,
                width: '100%'
              }}
              >
              <NaverMap 
                mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
                style={{
                  width: '100%',
                  height: '100%',
                }}
                zoom={16}
                center={{lat: 37.5567852, lng: 126.9355017}}
              
              >    
                {routes && (
                  <Polyline 
                    path={routes.map((route) => new window.naver.maps.LatLng(route.lat, route.lng))}
                    // clickable // 사용자 인터랙션을 받기 위해 clickable을 true로 설정합니다.
                    strokeColor={'#ff3344'}
                    strokeStyle={'solid'}
                    strokeOpacity={0.8}
                    strokeWeight={4}        
                  />
                )}
                {departureRef.current && (
                  <Marker 
                    position={departureRef.current}
                  />
                )}
                {arrivalRef.current && (
                  <Marker 
                    position={arrivalRef.current}
                  />
                )}
              </NaverMap>
              </MapDiv>
              </NavermapsProvider>
            </Container>
            <BottomImagesContainer>
                <BottomDetailImage src={excercise_road3_bottom_detail} alt="Bottom Detail" />
                <FollowUpImage src={excercise_road3_bottom_follow} alt="Bottom Follow" />
            </BottomImagesContainer>
        </ExerciseRoad3Container>
    );
};

export default Exercise_road_3;

