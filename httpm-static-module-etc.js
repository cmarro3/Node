const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
    const readStream = fs.createReadStream('./static/cat.png')
    res.writeHead(200, {'Content-Type' : 'image/png'});
    readStream.pipe(res);
}).listen(3000);

// res.writeHead(200, {'Content-Type' : 'text/html'}); for uploading html 
//res.writeHead(200, {'Content-Type' : 'application/json'}); for uploading json data
//res.writeHead(200, {'Content-Type' : 'image/png'}); for uploading images
// note that when were changing what were uploading we must put the folder name and then 
// the name of the file 