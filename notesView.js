class NotesView {
  constructor(model) {
    this.model = model;
    this.mainEL = document.querySelector('#main-container');
    this.inputEl = document.querySelector('#note-input')
    this.buttonEl = document.querySelector('#add-note');

    this.buttonEl.addEventListener('click', () => {
      this.model.addNote(this.inputEl.value);
      this.inputEl.value = "";
      this.displayNotes();

    })
  }
  
  displayNotes() {
    //refresh notes display for this call
    document.querySelectorAll('.note').forEach( e => e.remove());
  
    //display notes 
    const notes = this.model.getNotes();
    notes.forEach((note) => {
      const div = document.createElement('div');
      div.className = "note";
      div.innerText = note;
      this.mainEL.append(div)
    })
  }
}

module.exports = { NotesView };