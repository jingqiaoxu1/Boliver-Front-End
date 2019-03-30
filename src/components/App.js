import React, { Component } from 'react';
import { TopBar } from './TopBar';
import { NavBar } from './NavBar';
import { Main } from './Main';


class App extends Component {

  state = {
    isLoggedIn: false
  }

  //callback function 1
  handleLogin = () => {
    this.setState({ isLoggedIn: true})
  }

  //callback function 2
  handleLogout = () => {
    this.setState({ isLoggedIn: false})
  }


  render() {
    return (
      <div className="App">
        <TopBar 
          isLoggedIn={this.state.isLoggedIn}
          handleLogout={this.handleLogout}
        />
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;
