// 원래 있던거

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




// 헤더 미리보기
// import React from 'react';
// import Header from './components/Header';

// function App() {
//   return (
//     <div>
//       <Header title="지도 연습하기" />
//       {/* 다른 컴포넌트 추가 */}
//     </div>
//   );
// }

// export default App;






// 가이딩박스 미리보기
// import React from 'react';
// import Guide from './components/Guide';

// function App() {
//   return (
//     <div>
//       <Guide text="당신은 공원의 정확한 이름을 모릅니다.
// 그렇다면 그냥 ‘공원’이라고 검색을
// 해볼까요?세요. " />
//     </div>
//   );
// }

// export default App;





// 홈맵 미리보기

// import React from 'react';
// // import Lesson from './Lesson'; // Lesson 컴포넌트
// import Header from './components/Header';
// import BigBox from './home_map';
// import styled from "styled-components";
// import FirstBox from './home_total';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #ffffff;;
//   overflow-x: hidden;
//   overflow-y: hidden;
//   width: 393px;
//   height: 852px;
//   margin: 0;
// `;

// function App() {
//   return (
//     <Container>
//       <Header title = '지도 연습하기'/>
//       <BigBox />
//       {/* <FirstBox /> */}
//     </Container>
//   );
// }

// export default App;







//practice1

// import React from 'react';
// import Practice1 from './practice1'; 

// function App() {
//   return (
//     <div className="App">
//       <Practice1 />
//     </div>
//   );
// }

// export default App;







//practice2(마커만)

import React from 'react';
import Practice2 from './Practice2'; 

function App() {
  return (
    <div className="App">
      <Practice2 />
    </div>
  );
}

export default App;

