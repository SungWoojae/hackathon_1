import React from 'react';
import styled from 'styled-components';
import exercise_road4_top from '../images/exercise_road4_top.svg';
import alert_success from '../images/alert_success.svg';

import {  useRef } from 'react';
import { NavermapsProvider, Polyline } from 'react-naver-maps';
import { Container as MapDiv, NaverMap, Marker } from 'react-naver-maps';

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
  position: relative; /* 추가된 부분 */
`;

const Road4Top = styled.div`
  width: 100%;
  height: 120px;
  flex-shrink: 0;
  background-image: url(${exercise_road4_top});
  background-size: contain;
  background-repeat: no-repeat;
`;

const AlertSuccess = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${alert_success});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Exercise_road_4 = () => {
    const routes = [
      {
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
      {
        lat : 173, 
        lng : 56.617}, 
      {
        lat : 90, 
        lng : 40.498}, 
      {
        lat : 83, 
        lng : 42.685}];
    const departureRef = useRef({lat: 37.5603582, lng: 126.9367624});
    const arrivalRef = useRef({lat: 37.5567852, lng: 126.9355017});
    return (
        <Container>
            <Road4Top />
            <NavermapsProvider
              ncpClientId={process.env.REACT_APP_NAVERMAP_API_KEY}
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
              zoom={18}
              center={{lat: 37.5603582, lng: 126.9367624}}
            
            >    


              
              <Polyline 
                path= {[
                  new window.naver.maps.LatLng(286,56.102),
                  new window.naver.maps.LatLng(743,364.518),
                  new window.naver.maps.LatLng(245,71.836),
                  new window.naver.maps.LatLng(106,47.697),
                  new window.naver.maps.LatLng(173,56.617),
                  new window.naver.maps.LatLng(90,40.498),
                  new window.naver.maps.LatLng(83,42.685),
                ]}
                // clickable // 사용자 인터랙션을 받기 위해 clickable을 true로 설정합니다.
                strokeColor={'#ff3344'}
                strokeStyle={'solid'}
                strokeOpacity={0.8}
                strokeWeight={4}        
              />
             
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
            <AlertSuccess />
        </Container>
    );
};

export default Exercise_road_4;
