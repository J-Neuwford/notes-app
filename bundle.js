(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
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
      };
      module.exports = { NotesModel: NotesModel2 };
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainEL = document.querySelector("#main-container");
          this.inputEl = document.querySelector("#note-input");
          this.buttonEl = document.querySelector("#add-note");
          this.buttonEl.addEventListener("click", () => {
            this.model.addNote(this.inputEl.value);
            this.inputEl.value = "";
            this.displayNotes();
          });
        }
        displayNotes() {
          document.querySelectorAll(".note").forEach((e) => e.remove());
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const div = document.createElement("div");
            div.className = "note";
            div.innerText = note;
            this.mainEL.append(div);
          });
        }
      };
      module.exports = { NotesView: NotesView2 };
    }
  });

  // index.js
  var { NotesModel } = require_notesModel();
  var { NotesView } = require_notesView();
  var model = new NotesModel();
  var notesView = new NotesView(model);
})();
