console.log('Starting App.');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');


const argv = yargs
    .command('add','Add a new Note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        }
    })
    .help()
    .argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);


if(command === 'add'){
    var resultNote = notes.addNote(argv.title, argv.body);
    console.log(resultNote);
    if(_.isObject(resultNote)){
        console.log('Note is added!');
    } else {
        console.log('Note is not Added because of title duplication')
    }
} else if(command === 'list'){
    console.log('Listing all notes: ',notes.getAll());
} else if(command === 'read'){
    var fetchedNote = notes.readNote(argv.title);
    var message = fetchedNote.length === 0 ? 'No such note' : `That note has ${fetchedNote[0].body}` ;
    console.log(message);
} else if(command === 'remove'){
    var removedNote = notes.removeNote(argv.title);
    var message = removedNote ? 'Note is removed.' : 'No such note.';
    notes.logNote(removedNote,message);
} else {
    console.log('Command not recognized');
}