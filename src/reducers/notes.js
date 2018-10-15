const initialState = [];

export default function notes(state=initialState, action) {
  let noteList = state.slice();

  switch(action.type) {

    case 'FETCH_NOTES':
      return [...state, ...action.notes];

    case "ADD_NOTE":
      return [...state, action.note];

    case "UPDATE_NOTE":
      let noteToUpdate = noteList[action.index];
      console.log(action)
      noteToUpdate.text = action.note.text;
      noteList.splice(action.index, 1, noteToUpdate);
      return noteList;

    case "DELETE_NOTE":
      noteList.splice(action.index, 1);
      return noteList;

    default:
      return state;
  }
}

export const addNote = text => {
  return {
    type: 'ADD_NOTE',
    text
  }
}

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
