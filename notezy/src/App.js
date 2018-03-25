import React, { Component } from 'react';
import 'milligram';

import Sidebar from './components/Sidebar';
import Editor from './components/Editor';

class App extends Component {
  constructor(){
    super();
    const indexKey = 'markdown';
    const savedNotes = JSON.parse(localStorage.getItem(notes));

    this.state = {
      notes: savedNotes ? savedNotes : [],
      currentNote: ''
    }

  }


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
