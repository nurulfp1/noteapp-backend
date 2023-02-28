const { addNoteHandler } = require('./handler');

const notes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: () => {},
  },
];

module.eports = notes;
