import React, { Component } from 'react';
import { TopBar } from './TopBar';
import { NavBar } from './NavBar';
import { Main } from './Main';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;
