import Header2 from "../components/Header2";
import "./tut1.css";
import Halfegg from "../images/halfegg.svg"
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StartBox = styled.div`
    width: 80px;
    height: 38px;
    flex-shrink: 0;
    border-radius: 10px;
    background: #006BFF;
    position: absolute;
    bottom: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none; 
    
`;

const StartText = styled.p`
    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    text-decoration: none; 
    border: none; 
    
`;

function Tut1() {
  return (
    <div className="container">
      <Header2 title="지도 연습해보기" subtitle="1. 길 검색해서 찾기" 
        style={{marginTop : 0, top : 0, paddingTop : 0,}}
      />
      <div className="body">
        <div className="mission">
          당신은 지금 <strong>‘신촌역’</strong>에서
          출발해서, 친구와 근처
          공원에서 만나기로 했어요.
          공원까지 길을 찾아가는
          연습을 해 보아요.
        </div>
      </div>
      <img src={Halfegg} className="image"></img>
      <StartBox>
        <Link to={"/tut2"}
        <StartText>시작하기</StartText>
      </StartBox>
    </div>
  );
}

export default Tut1;