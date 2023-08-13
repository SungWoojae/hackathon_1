import React, { useState, useEffect } from 'react';
import Header2 from '../components/Header2';
import ExerciseBox from '../components/exercise_direction_bottom';
import mapfix1Image from '../images/exercise_direction_1_mapfix1.svg';
import mapfix2Image from '../images/exercise_direction_1_mapfix2.svg';
import mapfix3Image from '../images/exercise_direction_1_mapfix3.svg';
import mapfix4Image from '../images/exercise_direction_1_mapfix4.svg';
import CircleImage from '../images/exercise_direction_1_circle.svg'; // Import your circle image
import styled from 'styled-components';
import success from '../images/alert_success.svg';
import { useDeviceOrientation } from './useDeviceOrientation'; // Import the useDeviceOrientation hook

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
  position: relative;
`;

const CircleOverlay1 = styled.img`
  position: absolute;
  top: 39%;
  left: 64%;
  transform: translate(-50%, -50%) rotate(${props => props.rotation}deg);
  pointer-events: none;
`;

const CircleOverlay2 = styled.img`
  position: absolute;
  top: 29%;
  left: 64%;
  transform: translate(-50%, -50%) rotate(${props => props.rotation}deg);
  pointer-events: none;
`;

const CircleOverlay3 = styled.img`
  position: absolute;
  top: 29%;
  left: 39%;
  transform: translate(-50%, -50%) rotate(${props => props.rotation}deg);
  pointer-events: none;
`;

const CircleOverlay4 = styled.img`
  position: absolute;
  top: 29%;
  left: 15%;
  transform: translate(-50%, -50%) rotate(${props => props.rotation}deg);
  pointer-events: none;
`;

const NextButton = styled.button`
  width: 80px;
  height: 39px;
  border-radius: 10px;
  background: #D9D9D9;
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;

  /* 버튼 안의 텍스트 스타일 적용 */
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

const PrevButton = styled.button`
  width: 80px;
  height: 39px;
  border-radius: 10px;
  background: #D9D9D9;
  position: absolute;
  bottom: 20px;
  left: 20px;
  cursor: pointer;

  /* 버튼 안의 텍스트 스타일 적용 */
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;

function Exercise_direction1() {
  useEffect(() => {
    requestAccess();
  }, []);
  const [textIndex, setTextIndex] = useState(0);
  const textList = [
    "1. 휴대폰을 가고자하는 방향을 향해 들어주세요.",
    "2. 화살표와 길의 방향이 일치할 경우 '시작' 버튼을 눌러주세요.",
    "3. 파란색 세모가 현재 방향을 나타냅니다.",
    "4. 3초가 지나면 파란 점이 이동하게 됩니다. 그때까지 방향을 유지해주세요.",
    "5. 빨간표시가 도착점입니다. 파란길을 따라 도착지를 향해가세요!",
];

  const { orientation, requestAccess, revokeAccess, error } = useDeviceOrientation(); // Use the useDeviceOrientation hook

  const handleNextClick = () => {
    if (textIndex < textList.length - 1) {
      setTextIndex(textIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (textIndex > 0) {
      setTextIndex(textIndex - 1);
    }
  };

  const calculateRotation = () => {
    if (orientation && orientation.alpha != null) {
      return orientation.alpha;
    }
    return 0;
  };

console.log(orientation)


  const [timing, setTiming] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [shouldChangeImage1, setShouldChangeImage1]=useState(false);
  const [shouldChangeImage2, setShouldChangeImage2]=useState(false);
  const [shouldChangeImage3, setShouldChangeImage3]=useState(false);

  useEffect(() => {
    if (!shouldChangeImage1) {
      if (orientation && ((orientation.alpha >= 300 && orientation.alpha <= 360) || (orientation.alpha >= 0 && orientation.alpha <= 50))) {
        setIsActive(true);
        setTiming(0);
  
        const interval = setInterval(() => {
          setTiming(prevTiming => prevTiming + 100);
        }, 100);
  
        return () => {
          clearInterval(interval);
        };
      } else {
        setIsActive(false);
        setTiming(0);
      }
    } else {
      if (!shouldChangeImage2) {
        if (orientation && ((orientation.alpha >= 220 && orientation.alpha <= 320))) {
          setIsActive(true);
          setTiming(0);
        
          const interval = setInterval(() => {
            setTiming(prevTiming => prevTiming + 100);
          }, 100);
        
          return () => {
            clearInterval(interval);
          };
        } else {
          setIsActive(false);
          setTiming(0);
          }
      } else {
        if(!shouldChangeImage3) {
          if (orientation && ((orientation.alpha >= 220 && orientation.alpha <= 320))) {
            setIsActive(true);
            setTiming(0);
      
            const interval = setInterval(() => {
              setTiming(prevTiming => prevTiming + 100);
            }, 100);
          
            return () => {
              clearInterval(interval);
            };
          } else {
            setIsActive(false);
            setTiming(0);
            }
        }
        }
      }
    }, [orientation]);

  useEffect(() => {
    if (isActive && timing === 3000) {
      if (!shouldChangeImage1) {
        setShouldChangeImage1(true);
      }
      if (shouldChangeImage1 && !shouldChangeImage2) {
        setShouldChangeImage2(true);
      }
      if (shouldChangeImage2 && !shouldChangeImage3) {
        setShouldChangeImage3(true);
      }
    }
  }, [isActive, timing]);


  return (
    <Container>
      <Header2 title="실습1. 방향찾기" subtitle="1단계: ㄱ자 방향" />
      {shouldChangeImage3 ? (
        <img src={mapfix4Image} alt=""/>
      ) : shouldChangeImage2 ? (
          <img src={mapfix3Image} alt="" />
        ) : shouldChangeImage1 ? (
            <img src={mapfix2Image} alt=""/>
          ) : (
              <img src={mapfix1Image} alt=""/>
      )}

      {shouldChangeImage3 ? (
        <CircleOverlay4 src={CircleImage} rotation={calculateRotation()} />
      ) : shouldChangeImage2 ? (
        <CircleOverlay3 src={CircleImage} rotation={calculateRotation()} />
        ) : shouldChangeImage1 ? (
          <CircleOverlay2 src={CircleImage} rotation={calculateRotation()} />
          ) : (
            <CircleOverlay1 src={CircleImage} rotation={calculateRotation()} />
      )}
      
      {shouldChangeImage3 ? (
        <img src={success} alt="success" className='overlay' style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}/>
      ): (null)
      }
           
      <ExerciseBox text={textList[textIndex]} />
      {textIndex !== textList.length - 1 && <NextButton onClick={handleNextClick}>다음</NextButton>}
      {textIndex !== 0 && <PrevButton onClick={handlePreviousClick}>이전</PrevButton>} 
    </Container>
  );
}

export default Exercise_direction1;