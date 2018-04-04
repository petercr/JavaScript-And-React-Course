import React, { Component } from 'react';
import 'milligram';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';

const uuidv1 = require('uuid/v1');


class App extends Component {
  constructor(){
    super();
    const indexKey = 'markdown';
    const savedNotes = JSON.parse(localStorage.getItem(indexKey));

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
    console.log('test ');
    const newID = this.noteID();
    const note = {id: newID, body: `What's going on today?`};
    const newNote = this.state.notes;
    newNote.push(note);
    this.setState({notes: newNote});

  }

  selectNote(note) {
    if (note === this.state.currentNote) return;
    this.setState({savedNotes: note});
  }

  save(notes) {
    // if there's no notes then exit func
    if (!notes) return;

    //else use key to parse notes to localStorage
    const key = 'markdown';
    localStorage.setItem(key, JSON.stringify(notes));
  }

  updateNote(body) {
    let notes = this.state.notes;
    let currentNote = this.state.currentNote;
    currentNote = body;
    this.setState({savedNotes: currentNote});

    // loop through the notes to find the index of it
    let locationOfNote = notes.findIndex((index) => {
      return index.id === currentNote.id;
    });

    // sets mde body to the selected note
    notes[locationOfNote] = currentNote;

    this.setState({notes: notes});

    this.save(this.state.notes);

  }


  render() {
    return (
      <div className="App container">
        <h1>Welcome to Notezy</h1>
        <div className="row">
          <Sidebar add={this.addNote} select={this.selectNote} selected={this.currentNote} notes={this.state.notes} />
          <Editor change={this.updateNote} currentNote={this.currentNote}  />
        </div>
      </div>
    );
  }
}

export default App;
