import React, { Component } from 'react';
import './App.css';
import WelcomePage from './components/WelcomePage';
import {Route, Link} from 'react-router-dom';
import Questions from './components/Questions';
import House from './components/House';

class App extends Component {
  render() {
    return (
      <div className="App">

       <Route exact exact path="/" component={WelcomePage} />
       <Route exact path="/questions" component={Questions} />
       <Route exact path="/house" component={House} />
      </div>
    );
  }
}

export default App;
