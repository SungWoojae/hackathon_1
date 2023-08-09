import React from 'react';
import Header2 from '../components/Header2';
import Guide from '../components/Guide';
import Finger from '../images/finger.svg';

const Tut3 = () => {
    const headerTitle = "지도 앱 배우기";
    const headerSubtitle = "1. 목적지 찾고 설정하기";
    const guideText = '당신은 어느 공원에 갈지\n아직 정하지 않았어요.\n그렇다면 그냥 ‘공원’이라고 검색을\n해볼까요?'
  
    return (
      <div>
        {/* 헤더 */}
        <Header2 title={headerTitle} subtitle={headerSubtitle} />
        {/* 가이드텍스트 */}
        <Guide text={guideText} />
        {/* 손가락 */}
        <img
        src={Finger}
        alt="Finger"
        style={{
          position: 'absolute',
          left: '260px',
          top: '200px',
          width: '100px',
          height: '100px',
        }}
        />
        {/* 검은네모 */}
        <div
        style={{
          position: 'absolute',
          bottom: '0',
          width: '393px',
          height: '737px',
          backgroundColor: 'black',
          opacity: '0.5',
          zIndex: '-1',
        }}
        />
      </div>
    );
  };

export default Tut3;
