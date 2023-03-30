const { NotesClient } = require('./notesClient');
const { NotesModel } = require('./notesModel');
const { NotesView } = require('./notesView');

const client = new NotesClient();
const model = new NotesModel();
const notesView = new NotesView(model, client);

notesView.displayNotesFromApi();