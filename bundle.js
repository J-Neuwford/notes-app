(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesClient.js
  var require_notesClient = __commonJS({
    "notesClient.js"(exports, module) {
      var NotesClient2 = class {
        constructor() {
        }
        loadNotes(callback, errorCallback) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
            callback(data);
          }).catch((error) => {
            errorCallback(error);
          });
        }
        createNote(data, errorCallback) {
          fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify({ "content": data })
          }).then((response) => response.json()).then((data2) => {
            console.log("Success:", data2);
            return data2;
          }).catch((error) => {
            errorCallback(error);
          });
        }
      };
      module.exports = { NotesClient: NotesClient2 };
    }
  });

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
        setNotes(notes) {
          this.notes = notes;
        }
      };
      module.exports = { NotesModel: NotesModel2 };
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2, client2) {
          this.model = model2;
          this.client = client2;
          this.mainEL = document.querySelector("#main-container");
          this.inputEl = document.querySelector("#note-input");
          this.buttonEl = document.querySelector("#add-note");
          this.buttonEl.addEventListener("click", () => {
            this.client.createNote(this.inputEl.value, () => {
              this.displayNotesFromApi();
            });
            this.inputEl.value = "";
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
        displayNotesFromApi() {
          this.client.loadNotes((notes) => {
            this.model.setNotes(notes);
            this.displayNotes();
          }, () => {
            this.displayError();
          });
        }
        displayError() {
          const div = document.createElement("div");
          div.className = "note";
          div.innerText = "Oops! Something went wrong";
          this.mainEL.append(div);
        }
      };
      module.exports = { NotesView: NotesView2 };
    }
  });

  // index.js
  var { NotesClient } = require_notesClient();
  var { NotesModel } = require_notesModel();
  var { NotesView } = require_notesView();
  var client = new NotesClient();
  var model = new NotesModel();
  var notesView = new NotesView(model, client);
  notesView.displayNotesFromApi();
})();
