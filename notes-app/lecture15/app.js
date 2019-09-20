const chalk = require('chalk');
const getNotes = require('./notes.js');

const command = process.argv[2];

if(command === 'add'){
    console.log('Add a note!');
}else if(command === 'remove'){
    console.log('Remove a note!!');
}


