import React from 'react';
import './App.css';
import Tut1 from './tutorial/tut1';
import styled from 'styled-components';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Exercise_road_3 from './practice2/excercise_road3';
import Exercise_road_4 from './practice2/excercise_road4';
import Exercise_road_0 from './practice2/excercise_road0';
import Exercise_road_2 from './practice2/excercise_road2';
// import Tut2 from './tutorial/tut2';
// import Maphome from './maphome';
// import MapHomeBox from './MapHomeBox';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 393px;
  height: 852px;
  margin: 0;
`;

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route exact path="/"><Exercise_road_2/></Route> 
          <Route exact path="/exercise_road_3"><Exercise_road_3/></Route> 
          <Route exact path="/exercise_road_4"><Exercise_road_4/></Route> 
        </Switch>
      </Router>
    </Container>
  );
}

export default App;



