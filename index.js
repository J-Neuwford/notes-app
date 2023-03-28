const { NotesModel } = require('./notesModel');
const { NotesView } = require('./notesView');

const model = new NotesModel();
const notesView = new NotesView(model);