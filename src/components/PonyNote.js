import React, { Component } from 'react';
import {connect} from 'react-redux';
import {notes} from "../actions";


class PonyNote extends Component {

  state = {
    text: "",
    updateNoteId: null,
  }

  resetForm = () => {
    this.setState({text: "", updateNoteId: null});
  }

  selectForEdit = (id) => {
    let note = this.props.notes[id];
    this.setState({text: note.text, updateNoteId: id});
  }

  submitNote = (e) => {
    e.preventDefault();
    if (this.state.updateNoteId === null) {
      this.props.addNote(this.state.text);
    } else {
      this.props.updateNote(this.state.updateNoteId, this.state.text);
    }
    this.resetForm();
  }

  render() {
    return (
      <div>
        <h2>Welcome to PonyNote!</h2>
        <hr />
        <h3>Notes</h3>
        <h4>Add new note</h4>
        <form onSubmit={this.submitNote}>
          <input
           value={this.state.text}
           placeholder="Enter note here..."
           onChange={(e) => this.setState({text: e.target.value})}
           required />
          <input type="submit" value="Save Note" />
        </form>
        <table>
          <tbody>
            {this.props.notes.map((note, index) => (
              <tr>
                <td>{note.text}</td>
                <td><button onClick={() => this.selectForEdit(index)}>edit</button></td>
                <td><button onClick={() => this.props.deleteNote(index)}>delete</button></td>
              </tr>
            ))}
          </tbody>
        </table> 
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNote: (text) => {
      dispatch(notes.addNote(text));
    },
    updateNote: (id, text) => {
      dispatch(notes.updateNote(id, text));
    },
    deleteNote: (id) => {
      dispatch(notes.deleteNote(id));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PonyNote);
