const initialState = [
  {text: "Write code!!"}
];

export default function notes(state=initialState, action) {
  let noteList = state.slice();

  switch(action.type) {

    case "ADD_NOTE":
      return [...state, {text: action.text}];

    case "UPDATE_NOTE":
      let noteToUpdate = noteList[action.id];
      noteToUpdate.text = action.text;
      noteList.splice(action.id, 1, noteToUpdate);
      console.log(noteList)
      return noteList;

    case "DELETE_NOTE":
      noteList.splice(action.id, 1);
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
