//read and write data more effectinally
const fs = require('fs');
const readstream = fs.createReadStream('./example.txt', 'utf8');
const wrtiestream = fs.createWriteStream('example2.txt'); // new file
readstream.on('data',(chunk)=>{
    // console.log(chunk); reads file 
    wrtiestream.write(chunk); // writes the same data on to new file

});

