import React, { useState } from 'react';
import styled from 'styled-components';
import bottombox from './images/bottombox.svg';

import { NavermapsProvider } from 'react-naver-maps';
import { Container as MapDiv, NaverMap, Marker } from 'react-naver-maps';

const InputBox = () => {
    const [inputText, setInputText] = useState('');

    const handleClearText = () => {
        setInputText('');
    };

    return (
        <div
            className="box"
            style={{
                width: '393px',
                height: '62px',
                flexShrink: '0',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
                position: 'relative',
            }}
        >
            <input
                type="text"
                style={{
                    width: '328px',
                    height: '46px',
                    flexShrink: '0',
                    border: 'none',
                    backgroundColor: 'transparent',
                    padding: '0 10px',
                    fontSize: '16px',
                    outline: 'none',
                }}
                placeholder="목적지를 입력해주세요"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <div
                style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '24px',
                    cursor: 'pointer',
                }}
                onClick={handleClearText}
            >
                x
            </div>
        </div>
    );
};

const StyledBottomBox = styled.div`
    width: 393px;
    height: 208px;
    flex-shrink: 0;
    border-radius: 10px 10px 0px 0px;
    background: #fff;
    box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.1);
    position: relative;
    background-image: url(${bottombox});
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
`;

const DepartBox = styled.div`
    width: 73px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 40px;
    border: 1px solid #006BFF;
    background: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 10px;
    right: 95px;
`;

const DepartText = styled.p`
    color: #006BFF;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`;

const ArrivalBox = styled.div`
    width: 73px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 40px;
    background: #006BFF;
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ArrivalText = styled.p`
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
`;

const BottomBox = () => {
    return (
        <StyledBottomBox>
            <DepartBox>
                <DepartText>출발</DepartText>
            </DepartBox>
            <ArrivalBox>
                <ArrivalText>도착</ArrivalText>
            </ArrivalBox>
        </StyledBottomBox>
    );
};



const ExerciseBox = () => {
    return (
        <div>
            <InputBox />
            <NavermapsProvider 
                ncpClientId='51ruhsam0c'
                error={<p>Maps Load Error</p>}
                loading={<p>Maps Loading...</p>}
                submodules={["geocoder"]}
                // or finClientId, govClientId  
            >
                <MapDiv
                style={{
                height: 700,
                width: '100%'
                }}
                >
                <NaverMap
                mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
                zoom={17}
                center={{ lat: 37.5567852, lng: 126.9355017 }}
                >
                <Marker defaultPosition={{ lat: 37.5567852, lng: 126.9355017 }} 
                />
                </NaverMap>
                </MapDiv>
            </NavermapsProvider>
            <BottomBox />
        </div>
    );
};

export default ExerciseBox;
