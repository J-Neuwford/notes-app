const { NotesClient } = require('./notesClient');

require('jest-fetch-mock').enableMocks();

describe('NotesClient class', () => {
  it('calls fetch and loads data', (done) => {


    const client = new NotesClient();

    fetch.mockResponseOnce(JSON.stringify({
      name: "Some value",
      id: 123
    }));

    client.loadNotes((returnDataFromApi) => {
      expect(returnDataFromApi.name).toEqual("Some value");
      expect(returnDataFromApi.id).toBe(123);

      done();
   })
  })
})