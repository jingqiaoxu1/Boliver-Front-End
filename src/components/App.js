import React, { Component } from 'react';
import { TopBar } from './TopBar';
import { NavBar } from './NavBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <NavBar />
      </div>
    );
  }
}

export default App;
