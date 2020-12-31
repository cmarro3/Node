const http = require('http');
const server = http.createServer((req,res)=>{
    // res.write('Hello, World from nodejs');
    // res.end(); this sends a message to a local host. localhost:3000
    if(req.url === '/'){
        res.write('Hello, World from nodejs');
        res.end();
    } else{
        res.write('using some other domain')
        res.end();
    }
});

server.listen('3000');
