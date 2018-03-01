import React, { Component } from 'react';
import 'milligram';

import Sidebar from './components/Sidebar';
import Editor from './components/Editor';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1>Welcome to Notezy</h1>
        <div className="row">
          <Sidebar />
          <Editor />
        </div>
      </div>
    );
  }
}

export default App;
