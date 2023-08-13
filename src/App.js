import React from 'react';
import './App.css';
import styled from 'styled-components';
// import Tut1 from './tutorial/tut1';
import Tut1 from './tutorial/tut1';
import Tut2 from './tutorial/tut2';
import Tut3 from './tutorial/tut3';
import Tut3_base from './tutorial/tut3_base';
import Tut4 from './tutorial/tut4';
import Tut4_base from './tutorial/tut4_base';
import Tut5 from './tutorial/tut5';
import Tut6 from './tutorial/tut6';
import Tut3map from './tutorial/tut3_base';
import Maphome from './maphome';
import Newmaphome from './newmaphome';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BigBox from './home_map';
import ExerciseRoad3 from './practice2/exercise_road3';
import ExerciseRoad4 from './practice2/exercise_road4';
import ExerciseRoad0 from './practice2/exercise_road0+1';
import ExerciseRoad2 from './practice2/exercise_road2';
import ExerciseDirection1 from './practice1/exercise_direction_explanation';
import ExerciseDirection1Acting from './practice1/exercise_direction_acting';
import MapHome from './maphome';
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
      {/* <Exercise_direction1 /> */}
      {/* <Router>
        <Switch>
          <Route exact path="/"><BigBox /></Route> 
          <Route exact path="/tutorial1/tut1"><Tut1 /></Route> 
          <Route exact path="/tutorial1/tut2"><Tut2 /></Route> 
          <Route exact path="/tutorial1/tut3"><Tut3 /></Route> 
          <Route exact path="/tutorial1/tut4"><Tut4 /></Route>
          <Route exact path="/tutorial1/tut5"><Tut5 /></Route> 
          <Route exact path="/tutorial1/tut6"><Tut6 /></Route> 
          <Route exact path="/practice1"><ExerciseDirection1 /></Route>
          <Route exact path="/practice1/acting"><ExerciseDirection1Acting /></Route>
          <Route exact path="/practice2/exercise_road_1"><ExerciseRoad0 /></Route>
          <Route exact path="/practice2/exercise_road_2"><ExerciseRoad2/></Route> 
          <Route exact path="/practice2/exercise_road_3"><ExerciseRoad3/></Route> 
          <Route exact path="/practice2/exercise_road_4"><ExerciseRoad4/></Route> 
          <Route exact paht="/maphome"><MapHome /></Route>
        </Switch>
      </Router> */}
      <Tut6/>
      {/* <Newmaphome/> */}
    </Container>
  );
}

export default App;
