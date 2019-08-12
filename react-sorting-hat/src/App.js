import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import WelcomePage from './components/WelcomePage';
import {Route, Link} from 'react-router-dom';
import Questions from './components/Questions';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* App Component */}
        {/* <WelcomePage /> */}
       {/* Start with Welcome Page */}
       {/* Routes you to Question Page */}
       <Route exact exact path="/" component={WelcomePage} />
       <Route exact path="/questions" component={Questions} />
      </div>
    );
  }
}

export default App;
