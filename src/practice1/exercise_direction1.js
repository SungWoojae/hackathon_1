import Header2 from '../components/Header2';
import ExerciseBox from '../components/exercise_01';
import Map from '../images/exercise_direction_1_mapfix.svg';
import Alert from '../images/exercise_direction_1_alert.svg';
import styled from 'styled-components';

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

const AlertSuccess = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${Alert});
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Exercise_direction1() {
    return (
        <Container>
            <Header2 title="실습1. 방향찾기" subtitle="1단계: ㄱ자 방향"/>
            <img src={Map} alt=""></img>
            <AlertSuccess />
            <ExerciseBox text="1. 휴대폰을 가고자하는 방향을 향해 들어주세요. "/>
        </Container>
    );
}

export default Exercise_direction1;