import * as config_app from "../config/api.js";

export const updateNote = (id, text) => {
  return {
    type: 'UPDATE_NOTE',
    id,
    text
  }
}

export const deleteNote = id => {
  return {
    type: 'DELETE_NOTE',
    id
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
      headers: header,
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
