import React, { Component } from 'react';
import './App.css';
import Hello from './components/message/hello';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Hello />
        </header>
      </div>
    );
  }
}

export default App;
