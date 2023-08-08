import Header2 from "../components/Header2";
import "./tut1.css";
import Halfegg from "../images/halfegg.svg"

function Tut1() {
  return (
    <div className="container">
      <Header2 title="지도 연습해보기" subtitle="1. 길 검색해서 찾기" />
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
    </div>
  );
}

export default Tut1;