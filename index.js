const { NotesModel } = require('./notesModel');
const { NotesView } = require('./notesView');

const model = new NotesModel();
console.log(model.getNotes());

const notesView = new NotesView(model);
notesView.displayTitle('Notes App');

model.addNote('note one');
model.addNote('note two');
model.getNotes();
notesView.displayNotes();