import React, { Component } from 'react';


class Sidebar extends Component {
  renderList() {
    let noteList = [];
    this.props.notes.forEach((note) => {
      noteList.push(
        <li key={note.id} onClick={() => this.props.select(note)} className={note.id === this.props.selected.id ? 'selected' : ''}>
          { note.body }
        </li>
      );
    });
    return noteList;
  }

  render() {
    return (
      <div className="editor column column-25">
        <button className="button button-clear" onClick={this.props.add} >+ New Note </button>
        <dl className="list">
          {this.renderList()}
        </dl>
      </div>
    );
  }
}

export default Sidebar;
