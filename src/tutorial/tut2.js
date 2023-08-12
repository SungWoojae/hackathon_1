import React from "react";
import Header2 from "../components/Header2";
import Finger from '../images/finger.svg';
import Maphome from "../newmaphome";
import exercise_road1_bottom from '../images/exercise_road1_bottom.svg';
import Tut3 from "./tut3"; // Tut3 컴포넌트를 import합니다.

class Tut2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextPageVisible: false,
    };
  }

  handleClick = (e) => {
    const { clientY } = e;

    if (clientY >= 115 && clientY <= 570) {
      this.setState({
        nextPageVisible: true,
      });
    }
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#FFFFFF',
          width: '393px',
          height: '852px',
          margin: 0,
          position: 'relative',
        }}
      >
        {/* Maphome 컴포넌트 */}
        <Maphome
          style={{
            zIndex: -1,
          }}
        />
        {/* 현재 페이지 */}
        {!this.state.nextPageVisible && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 300,
              backgroundColor: "transparent",
            }}
            onClick={this.handleClick} // 클릭 이벤트 핸들러 추가
          >
            {/* 글씨 */}
            <div
              style={{
                color: 'black',
                fontSize: 30,
                fontWeight: 900,
                textShadow: '1px 1px 1px 1px white',
              }}
            >
              터치해서 시작하기!
            </div>
            {/* 손가락 */}
            <img
              src={Finger}
              className="image"
              style={{
                width: '100px',
                height: '100px',
                marginLeft: 150,
              }}
            />
          </div>
        )}

        {/* 다음 페이지 */}
        {this.state.nextPageVisible && (
          <Tut3 />
        )}

        {/* 지도 이미지 */}
        <img
          src={exercise_road1_bottom}
          alt=""
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Tut2;
