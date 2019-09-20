const chalk = require('chalk');
const getNotesString = require('./notes.js');

console.log(getNotesString());

console.log(chalk.green('Success!'));
console.log(chalk.red.bold.underline.bgGreen('Hello world!'));