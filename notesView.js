class NotesView {
  constructor(model) {
    this.model = model;
    this.body = document.querySelector('body');
  }

  displayTitle(string) {
    const heading = document.createElement('h1');
    heading.innerText = string;
    this.body.prepend(heading);
  }
  
  displayNotes() {
    const notes = this.model.getNotes();
    
    notes.forEach((note) => {
      const div = document.createElement('div');
      div.className = "note";
      div.innerText = note;
      this.body.append(div)
    })
  }
}

module.exports = { NotesView };