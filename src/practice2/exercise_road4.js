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
    // const routes = [
    //   {
    //     lat: 286, 
    //     lng: 56.102} , 
    //   {
    //     lat: 743, 
    //     lng: 364.518}, 
    //   {
    //     lat: 245, 
    //     lng : 71.836}, 
    //   {
    //     lat : 106, 
    //     lng : 47.697}, 
    //   {
    //     lat : 173, 
    //     lng : 56.617}, 
    //   {
    //     lat : 90, 
    //     lng : 40.498}, 
    //   {
    //     lat : 83, 
    //     lng : 42.685}];
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
              height: 700,
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
                  clickable={true}
                  strokeColor="blue"
                  strokeStyle="solid"
                  strokeOpacity={0.8}
                  strokeWeight={3}  
                  path= {[
                    new window.naver.maps.LatLng(37.5603582,126.9367624), 
                    new window.naver.maps.LatLng(37.559840,126.936910), 
                    new window.naver.maps.LatLng(37.559730,126.936913), 
                    new window.naver.maps.LatLng(37.559524,126.936922), 
                    new window.naver.maps.LatLng(37.559322,126.936928), 
                    new window.naver.maps.LatLng(37.559299,126.936928), 
                    new window.naver.maps.LatLng(37.559098,126.936930), 
                    new window.naver.maps.LatLng(37.558974,126.936929), 
                    new window.naver.maps.LatLng(37.558883,126.936929), 
                    new window.naver.maps.LatLng(37.558518,126.936926), 
                    new window.naver.maps.LatLng(37.557844,126.936915), 
                    new window.naver.maps.LatLng(37.557675,126.936912), 
                    new window.naver.maps.LatLng(37.557366,126.936916), 
                    new window.naver.maps.LatLng(37.557338,126.936917), 
                    new window.naver.maps.LatLng(37.557261,126.936912), 
                    new window.naver.maps.LatLng(37.556993,126.936896), 
                    new window.naver.maps.LatLng(37.556590,126.936874), 
                    new window.naver.maps.LatLng(37.556444,126.936868), 
                    new window.naver.maps.LatLng(37.556379,126.936866), 
                    new window.naver.maps.LatLng(37.556314,126.936865), 
                    new window.naver.maps.LatLng(37.556064,126.936861), 
                    new window.naver.maps.LatLng(37.555974,126.936859), 
                    new window.naver.maps.LatLng(37.555624,126.936858), 
                    new window.naver.maps.LatLng(37.555580,126.936804), 
                    new window.naver.maps.LatLng(37.555517,126.936729), 
                    new window.naver.maps.LatLng(37.555466,126.936643), 
                    new window.naver.maps.LatLng(37.555391,126.936442), 
                    new window.naver.maps.LatLng(37.555374,126.936111), 
                    new window.naver.maps.LatLng(37.555395,126.936060), 
                    new window.naver.maps.LatLng(37.555445,126.935936), 
                    new window.naver.maps.LatLng(37.555590,126.935554), 
                    new window.naver.maps.LatLng(37.555644,126.935413), 
                    new window.naver.maps.LatLng(37.555735,126.935168), 
                    new window.naver.maps.LatLng(37.555877,126.935236), 
                    new window.naver.maps.LatLng(37.556199,126.935436), 
                    new window.naver.maps.LatLng(37.556255,126.935474), 
                    new window.naver.maps.LatLng(37.556500,126.935636), 
                    new window.naver.maps.LatLng(37.556565,126.935699), 
                    new window.naver.maps.LatLng(37.556632,126.935781), 
                    new window.naver.maps.LatLng(37.556868,126.936165), 
                    new window.naver.maps.LatLng(37.556942,126.936287), 
                    new window.naver.maps.LatLng(37.556952,126.936153), 
                    new window.naver.maps.LatLng(37.556959,126.935680), 
                    new window.naver.maps.LatLng(37.556965,126.935316), 
                    new window.naver.maps.LatLng(37.556972,126.934809), 
                    new window.naver.maps.LatLng(37.556985,126.934545), 
                    new window.naver.maps.LatLng(37.556648,126.935483)]}
                  // clickable // 사용자 인터랙션을 받기 위해 clickable을 true로 설정합니다.
                        
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
