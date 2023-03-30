class NotesModel {
  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }

  addNote(string) {
    this.notes.push(string);
  }

  reset() {
    this.notes = [];
  }

  setNotes(notes) {
    this.notes = notes;
  }
}

module.exports = { NotesModel };