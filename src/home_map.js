import React from 'react';
import MapHomeBox from './components/MapHomeBox';
import Header from './components/Header';
import { Link } from 'react-router-dom';

const BigBox = () => {
    const bigBoxStyle = {
        width: '393px',
        height: '689px',
        background: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };

    const box = {
        margin: '10px 0px 0px 0px',
    }

    const textStyle = {
        flexShrink: 0,
        color: '#000',
        fontFamily: 'Inter',
        fontSize: '25px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: 'normal',
        whiteSpace: 'nowrap',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '20px',
    };

    const subTitle = {
        color: '#000',
        fontFamily: 'Inter',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',    
    };
    
    const boldText = {
        color: '#000',
        fontFamily: 'Inter',
        fontSize: '25px',
        fontStyle: 'normal',
        fontWeight: 700,
        lineHeight: 'normal',
    };

    return (
        <div style={bigBoxStyle}>
            <Header title="지도 연습해보기" />
            <div style={box}>
                <div style={textStyle}>
                    <div style={boldText}>이론</div> 
                    <div style={subTitle}>차근차근 배워봐요</div>
                </div>
                <Link to="/tutorial1/tut1" style={{ textDecoration: "none" }}>
                    <MapHomeBox title="이론 1. 길 검색해서 찾기" time="예상 소요 시간 : 10분"/>
                </Link>
                <MapHomeBox title="이론 2. 추후 공개" />
                <MapHomeBox title="이론 3. 추후 공개" />

            </div>
            <div style={box}>
                <div style={textStyle}>
                    <div style={boldText}>실습</div> 
                    <div style={subTitle}>혼자 직접 해봐요</div>
                </div>
                <Link to="/practice1" style={{ textDecoration: "none" }}>
                    <MapHomeBox title="실습 1. 방향 찾기" time="예상 소요 시간 : 10분"/>
                </Link>
                <Link to="/practice2/exercise_road_1" style={{ textDecoration: "none" }}>
                    <MapHomeBox title="실습 2. 경로 찾기" time="예상 소요 시간 : 5분"/>
                </Link>
                <MapHomeBox title="실습 3. 추후 공개"/>
                

            </div>
        </div>
    );
};

export default BigBox;


