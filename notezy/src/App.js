import React, { Component } from 'react';
import 'milligram';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';

const uuidv4 = require('uuid/v4');


class App extends Component {
  constructor(){
    super();
    const indexKey = "MARKDOWN"; 
    const savedNotes = JSON.parse(localStorage.getItem(indexKey));

    this.state = {
      notes: savedNotes ? savedNotes : [],
      selectedNote: ''
    }

    
    this.addNote = this.addNote.bind(this);
    this.noteID = this.noteID.bind(this);
    this.selectNote = this.selectNote.bind(this);
    this.updateNote = this.updateNote.bind(this);

  }

  noteID() {
    const theID = uuidv4();
    return theID;
  }

  addNote() {
    console.log('test ');
    const newID = this.noteID();
    const note = {id: newID, body: `What's going on today?`};
    const newNote = this.state.notes;
    newNote.push(note);
    this.setState({notes: newNote});

    this.selectNote(note);
    this.save(this.state.notes);

  }

  selectNote(note) {
    if (note === this.state.selectedNote) return;
    this.setState({selectedNote: note});
  }

  save(notes) {
    // if there's no notes then exit func
    if (!notes) return;

    //else use key to parse notes to localStorage
    const key = "MARKDOWN";
    localStorage.setItem(key, JSON.stringify(notes));
  }

  updateNote(body) {
    let notes = this.state.notes;
    let currentNote = this.state.selectedNote;
    currentNote.body = body;
    this.setState({selectedNote: currentNote});

    // loop through the notes to find the index of it
    let locationOfNote = notes.findIndex((index) => {
      return index.id === currentNote.id;
    });

    // sets mde body to the selected note
    notes[locationOfNote].body = currentNote.body;

    this.setState({notes: notes});

    this.save(this.state.notes);

  }


  render() {
    return (
      <div className="App container">
        <h1>Welcome to Notezy</h1>
        <div className="row">
          <Sidebar add={this.addNote} select={this.selectNote} selected={this.state.selectedNote} notes={this.state.notes} />
          <Editor change={this.updateNote} currentNote={this.state.selectedNote}  />
        </div>
      </div>
    );
  }
}

export default App;
