import React, { Component } from 'react';
import './App.css';
import routes from '../src/routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        { routes }
      </div>
    );
  }
}

export default App;
