const path = require('path');
const fs = require('fs');
const notes = require('../db/db.json');

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    );

    return note;
};

function findIndexById(id, notesArray) {
    const value = notesArray.filter(note => note.id === id)[0];
    const index = notesArray.indexOf(value);

    return index;
};

function deleteNote(index, notesArray) {
    if (index == 0) {
        notesArray.shift();
    } else {
        notesArray.splice(index, 1);
    }

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes: notesArray}, null, 2)
    );
};

module.exports = {createNewNote, deleteNote, findIndexById};