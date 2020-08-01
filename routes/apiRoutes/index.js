const router = require('express').Router();
const { notes } = require('../../db/db.json');
const { createNewNote, deleteNote, findIndexById } = require('../../lib/notes');

router.get('/notes', (req, res) => {

    let results = notes;
    res.json(results);

});

router.post('/notes', (req, res)=>{

    let highestID = notes[notes.length-1].id;

    req.body.id = (parseInt(highestID) + 1).toString();

    const note = createNewNote(req.body, notes);

    res.json(note);

});

router.delete('/notes/:id', (req, res) => {

    let results = notes;
    const index = findIndexById(req.params.id, notes);
    if (index || index == '0'){
        deleteNote(index,notes);
        res.json(results);
    } else {
        res.sendStatus(404);
    }

});

module.exports = router;