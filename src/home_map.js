import React from 'react';
import MapHomeBox from './components/MapHomeBox';

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
            <div style={box}>
                <div style={textStyle}>
                    <div style={boldText}>이론</div> 
                    <div style={subTitle}>차근차근 배워봐요</div>
                </div>

                <MapHomeBox title="이론 1. 목적지 설정하기" time="예상 소요 시간 : 20분"/>
                <MapHomeBox title="이론 1. 목적지 설정하기" time="예상 소요 시간 : 20분"/>
                <MapHomeBox title="이론 1. 목적지 설정하기" time="예상 소요 시간 : 20분"/>

            </div>
            <div style={box}>
                <div style={textStyle}>
                    <div style={boldText}>실습</div> 
                    <div style={subTitle}>혼자 직접 해봐요</div>
                </div>
                
                <MapHomeBox title="실습 1. 목적지 설정하기" time="예상 소요 시간 : 20분"/>
                <MapHomeBox title="실습 1. 목적지 설정하기" time="예상 소요 시간 : 20분"/>
                <MapHomeBox title="실습 1. 목적지 설정하기" time="예상 소요 시간 : 20분"/>

            </div>
        </div>
    );
};

export default BigBox;


