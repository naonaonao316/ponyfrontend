import * as config_app from "../config/api.js";

export const updateNote = (index, text) => {
  return (dispatch, getState) => {
    const body   = JSON.stringify({text,});
    const noteId = getState().notes[index].id;
    console.log(body)
    return fetch(`http://localhost:8000/api/notes/${noteId}/`, {
      headers: config_app.POST_HEADERS,
      method: "PUT",
      body
    })
    .then(res => res.json())
    .then(note => {
      console.log("note")
      console.log(note)
      return dispatch({
        type: 'UPDATE_NOTE',
        note,
        index
      })
    })
  }
}

export const deleteNote = index => {
  return (dispatch, getState) => {
    const noteId = getState().notes[index].id;

    return fetch(`http://localhost:8000/api/notes/${noteId}/`, { 
      headers: config_app.POST_HEADERS,
      method: "DELETE"
    })
    .then(res => {
      if (res.ok) {
        return dispatch({
          type: 'DELETE_NOTE',
          index
        })
      }
    })
  }
}

export const fetchNotes = () => {
  return dispatch => {
    return fetch("http://localhost:8000/api/notes/", config_app.POST_HEADERS)
      .then(res => res.json())
      .then(notes => {
        return dispatch({
          type: 'FETCH_NOTES',
          notes
        })
      })
  }
}

export const addNote = text => {
  return dispatch => {
    const header = {"Content-Type": "application/json"};
    const body = JSON.stringify({text});
    return fetch("http://localhost:8000/api/notes/", {
      headers: config_app.POST_HEADERS,
      method: "POST",
      body
    })
    .then(res => res.json())
    .then(note => {
      console.log(note)
      return dispatch({
        type: 'ADD_NOTE',
        note
      })
    })
  }
}
