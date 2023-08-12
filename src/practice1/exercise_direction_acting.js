import React, { useState, useEffect } from 'react';
import Header2 from '../components/Header2';
import ExerciseBox from '../components/exercise_direction_bottom';
import Map from '../images/exercise_direction_1_mapfix1.svg';
import CircleImage from '../images/exercise_direction_1_circle.svg'; // Import your circle image
import styled from 'styled-components';
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

const CircleOverlay = styled.img`
  position: absolute;
  top: 38%;
  left: 59%;
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
    if (orientation) {
      return orientation.alpha;
    }
    return 0;
  };

  console.log(orientation);

  const [timer, setTimer] = useState(null);
  const [shouldChangeImage, setShouldChangeImage] = useState(false);

  useEffect(() => {
    if (orientation) {
      if (orientation.alpha <= 10 && orientation.alpha >= -10) {
        // Start the timer if alpha value is around 0
        const timerId = setTimeout(() => {
          setShouldChangeImage(true);
        }, 3000); // 3000 milliseconds (3 seconds)

        setTimer(timerId);
      } else {
        // Clear the timer if alpha value is not around 0
        clearTimeout(timer);
        setTimer(null);
        setShouldChangeImage(false);
      }
    }
  }, [orientation]);

  return (
    <Container>
      <Header2 title="실습1. 방향찾기" subtitle="1단계: ㄱ자 방향" />
      <img src={Map} alt="" />
      {shouldChangeImage ? (
        <img src={require('../images/exercise_direction_1_mapfix2.svg')} alt="" />
      ) : (
        <img src={require('../images/exercise_direction_1_mapfix1.svg')} alt="" />
      )}
      <CircleOverlay src={CircleImage} rotation={calculateRotation()} />
      <ExerciseBox text={textList[textIndex]} />
      {textIndex !== textList.length - 1 && <NextButton onClick={handleNextClick}>다음</NextButton>}
      {textIndex !== 0 && <PrevButton onClick={handlePreviousClick}>이전</PrevButton>} 
    </Container>
  );
}

export default Exercise_direction1;
