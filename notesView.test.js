/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const { NotesView } = require('./notesView');
const { NotesModel } = require('./notesModel');

describe('NotesView', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });

  it('displays a title', () => {
    const view = new NotesView();
    view.displayTitle('Notes App');
    const x = document.querySelector('h1').innerText;
    expect(x).toEqual('Notes App');
  });

  it('displays a note', () => {
    const model = new NotesModel();
    const view = new NotesView(model);

    model.addNote('note one');
    model.addNote('note two');

    view.displayNotes();
    const x = document.querySelectorAll('div').length;
    expect(x).toEqual(2);

  })
  
});