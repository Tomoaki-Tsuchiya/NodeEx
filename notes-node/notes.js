console.log('Starting notes.js');
const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch(e) {
        console.log('no such file as notes-data.json');
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

var addNote = (title, body) => {
    notes = fetchNotes();
    note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => {
        console.log('notes.title:',note.title);
        console.log('note.title',title)
        return title === note.title;
    })

    console.log('duplicateNotes:', duplicateNotes);
    if (duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }

    
}

var getAll = () => {
    // debugger;
    var notes = fetchNotes();
    // var notesString = JSON.stringify(notes)
    return notes;
}
var readNote = (title) => {
    var notes = fetchNotes();
    debugger;
    var fetchedNotes = notes.filter((note)=> {
        console.log('title: ', title);
        console.log('note.title: ', note.title);
        return note.title === title;
    })
    return fetchedNotes
}

var removeNote = (noteTitle) => {
    var notes = fetchNotes();
    debugger;
    var chosenNote;
    var untakenTitle = notes.filter((note) => {
        console.log('title:', note.title);
        console.log('noteTitle:', noteTitle);
        if(note.title === noteTitle) {
            chosenNote = note;
        }
        return note.title !== noteTitle 
    });
    saveNotes(untakenTitle);
    return chosenNote;
}

var logNote = (note,message) => {
    console.log(message);
    if(note) {
        debugger;
        console.log('---');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } 
    
}

module.exports = {
    addNote,
    getAll,
    removeNote,
    readNote,
    logNote
}