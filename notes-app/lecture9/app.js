const fs = require('fs');

//  fs.writeFileSync('notes.txt',"File created using writeFileSync");

fs.appendFileSync('notes.txt', " .Append data in notes.txt using appendFileSync");