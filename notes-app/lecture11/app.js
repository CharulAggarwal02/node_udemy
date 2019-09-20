const validator = require('validator');
const getNotesString = require('./notes.js');

console.log(getNotesString());

console.log(validator.isEmail('gmail.com'));
console.log(validator.isURL('http://www.google.com'));