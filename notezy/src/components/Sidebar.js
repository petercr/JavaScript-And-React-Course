import React, { Component } from 'react';


class Sidebar extends Component {
  renderList() {
    let noteList = [];
    this.props.notes.forEach((note) => {
      list.push(
        <li key={note.id} onClick={() => this.props.select(note)} className={note.id === this.props.currentNote.id ? 'selected' : ''}>
          { note.body }
        </li>
      );
    });
    return list;
  }

  render() {
    return (
      <div className="editor column column-25">
        <button className="button button-clear" onClick={this.props.addNote} >+ New Note </button>
        <ul className="list">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
