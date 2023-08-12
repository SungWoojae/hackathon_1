import React from 'react';
import './App.css';
import Tut1 from './tutorial/tut1';
import styled from 'styled-components';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ExerciseRoad3 from './practice2/exercise_road3';
import ExerciseRoad4 from './practice2/exercise_road4';
import ExerciseRoad0 from './practice2/exercise_road0+1';
import ExerciseRoad2 from './practice2/exercise_road2';
import ExerciseDirection1 from './practice1/exercise_direction_explanation';
import ExerciseDirection1Acting from './practice1/exercise_direction_acting';
import MapHome from './maphome';

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
          <Route exact path="/"><ExerciseRoad0/></Route> 
          <Route exact path="/exercise_road_2"><ExerciseRoad2/></Route> 
          <Route exact path="/exercise_road_3"><ExerciseRoad3/></Route> 
          <Route exact path="/exercise_road_4"><ExerciseRoad4/></Route> 
          <Route exact path="/practice1"><ExerciseDirection1 /></Route>
          <Route exact path="/practice1/acting"><ExerciseDirection1Acting /></Route>
          <Route exact paht="/maphome"><MapHome /></Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;



