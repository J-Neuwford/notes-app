/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const { NotesView } = require('./notesView');
const { NotesModel } = require('./notesModel');
const { NotesClient } = require('./notesClient');

describe('NotesView', () => {

  beforeEach(() => {
    document.body.innerHTML = fs.readFileSync('./index.html');
  });


  it('displays a note', () => {
    const model = new NotesModel();
    const view = new NotesView(model);

    model.addNote('note one');
    model.addNote('note two');

    view.displayNotes();
    const x = document.querySelectorAll('div').length;
    expect(x).toEqual(3);

  })

  it('adds user defined note and displays it', () => {
    const model = new NotesModel();
    const view = new NotesView(model);

    const inputEl = document.querySelector('#note-input');
    inputEl.value = "test note";

    const buttonEl = document.querySelector('#add-note');
    buttonEl.click();

    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].innerText).toEqual("test note");

  })

  it('clears notes on the page before another displayNotes call', () => {
    const model = new NotesModel();
    const view = new NotesView(model);

    model.addNote('test note 1');
    model.addNote('test note 2');

    view.displayNotes();
    view.displayNotes();

    const x = document.querySelectorAll('div').length;
    expect(x).toEqual(3);
  })
});