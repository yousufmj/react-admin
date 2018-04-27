import React, { Component } from 'react';
import TopNav from './Components/Nav/TopNav';
import SideNav from './Components/Nav/SideNav';

class App extends Component {
  render() {
    return (
      <div className="App">
            <TopNav />
            <SideNav />
      </div>
    );
  }
}

export default App;
