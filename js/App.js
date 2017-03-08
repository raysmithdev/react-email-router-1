import React, { Component } from 'react';
import Home from './components/Home'
import Inbox from './components/Inbox'
import Spam from './components/Spam'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App
