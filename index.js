const { NotesClient } = require('./notesClient');
const { NotesModel } = require('./notesModel');
const { NotesView } = require('./notesView');

const client = new NotesClient();
const model = new NotesModel();
const notesView = new NotesView(model, client);

notesView.displayNotesFromApi();

// client.loadNotes((notes) => {
//   // This will be executed if notes are loaded correctly from the server
//   model.setNotes(notes);
//   notesView.displayNotes();
// }, () => {
//   // This will be executed if there's an error
//   notesView.displayError();
// });