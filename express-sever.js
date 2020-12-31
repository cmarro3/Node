// using express to get and send to local host
const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('hello world');
});

app.listen(3000);
app.get('/example', (req,res)=>{
    res.send('Yo, what up, chief!');
});

app.get('/example/:name/:age',(res,req)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + " : " + req.params.age);
});

// the code above isnt getting and recvind code from express server
// 