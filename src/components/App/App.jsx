import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import PartOne from '../PartOne/PartOne';
import PartTwo from '../PartTwo/PartTwo';
import PartThree from '../PartThree/PartThree';
// import PartOne from '../PartOne/PartOne.jsx';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <Route exact path="/"><PartOne /></Route>
        <Route exact path="/step/two"><PartTwo /></Route>
        <Route exact path="/step/three"><PartThree /></Route>
      </Router>

    </div>
  );
}

export default App;
