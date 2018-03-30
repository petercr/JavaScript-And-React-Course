import React, { Component } from 'react';
import 'milligram';
const uuidv1 = require('uuid/v1');

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

    this.noteID = this.noteID.bind(this);
    this.addNote = this.addNote.bind(this);
    this.save = this.save.bind(this);
    this.selectNote = this.selectNote.bind(this);
    this.updateNote = this.updateNote.bind(this);

  }

  noteID() {
    return uuidv1();
  }

  addNote() {
    const newID = this.noteID();
    const note = {id: newID, body: `What's going on today?`};
    const newNote = this.state.notes;
    newNote.push(note);
    this.setState({notes: newNote});

  }

  selectNote(note) {
    if (note === this.state.selectedNote) return;
    this.setState({selectedNote: note});
  }

  save(notes) {
    if (!notes) return;
    const key = 'markdown';
    localStorage.setItem(key, JSON.stringify(notes));
  }

  updateNote(body) {
    let notes = this.state.notes;
    let currentNote = this.state.selectedNote;
    currentNote.body = body;
    this.setState({selectedNote: currentNote});
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
