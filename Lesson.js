// 헤더2

import React from 'react';
import Header from './components/Header2'; //헤더
import Guide from './components/Guide'; //가이드


function Lesson() {
  return (
    <div>
      <Header title="타이틀" subtitle="섭타이틀" />
      <Guide text="안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. 안녕하세요. " />
    </div>
  );
}

export default Lesson;
