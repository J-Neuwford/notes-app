class NotesView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainEL = document.querySelector('#main-container');
    this.inputEl = document.querySelector('#note-input')
    this.buttonEl = document.querySelector('#add-note');

    this.buttonEl.addEventListener('click', () => {
      //this.model.addNote(this.inputEl.value);
      this.client.createNote(this.inputEl.value, () => {
        this.displayNotesFromApi();
      });

        
      this.inputEl.value = "";
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

  displayNotesFromApi() {

    this.client.loadNotes(notes => {
      this.model.setNotes(notes);
      this.displayNotes();
    }, () => {
      this.displayError();
    })
  }

  displayError() {
    const div = document.createElement('div');
    div.className = "note";
    div.innerText = "Oops! Something went wrong";
    this.mainEL.append(div)
  }
}

module.exports = { NotesView };