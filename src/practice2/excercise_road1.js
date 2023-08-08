import React, { useState } from 'react';
import styled from 'styled-components';
import excercise_road1_inputlist from './images/excercise_road1_inputlist.svg';
import excercise_road1_icon from './images/excercise_road1_icon.svg';
import excercise_road1_bottom from './images/excercise_road1_bottom.svg';

const InputBox = () => {
    const [inputText, setInputText] = useState('');

    const handleClearText = () => {
        setInputText('');
    };

    return (
        <div
            className="box"
            style={{
                width: '305px',
                height: '50px',
                flexShrink: '0',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.10)',
                overflow: 'hidden',
                position: 'relative',
            }}
        >

            {/* Add the image on the left side */}
            <img
                src={excercise_road1_inputlist}
                alt="Input List Icon"
                style={{
                    width: '20px',
                    height: '20px',
                    margin: '0 10px', // Add some margin for spacing
                }}
            />


            <input
                type="text"
                style={{
                    width: '298px', // Adjusted width to make space for the icon
                    height: '46px',
                    flexShrink: '0',
                    border: 'none',
                    backgroundColor: 'transparent',
                    padding: '0 10px',
                    fontSize: '16px',
                    outline: 'none',
                }}
                placeholder="장소, 버스, 지하철, 주소 검색"
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

            

            </div>
        </div>
    );
};


const BottomBox = () => {
    return (
        <div
            className="bottom"
            style={{
                width: '305px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center', // 화면 아래에 맞추기 위해 추가
                backgroundImage: `url(${excercise_road1_bottom})`, // 배경 이미지 추가
                backgroundSize: '100% 100%', // 배경 이미지 크기 설정
                borderRadius: '0 0 10px 10px',
                marginTop: '10px',
            }}
        >
            {/* BottomBox 내용 추가 */}
        </div>
    );
};

const Exercise_road_1 = () => {
    return (
        <div>
            <InputBox />
            <BottomBox />
        </div>
    );
};

export default Exercise_road_1;