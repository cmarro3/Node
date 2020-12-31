const fs = require('fs');
const zlib = require('zlib');
const gunzip = zlib.createGunzip();
const readstream = fs.createReadStream('./example2.txt');
const wrtiestream = fs.createWriteStream('uncompressed.txt'); // new file
readstream.pipe(gunzip).pipe(wrtiestream);
// the .pipe will write to the file while the writesteam will send it to whatever file your sending to 
