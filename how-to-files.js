const fs = require('fs');
// //create file 
// fs.writeFile('example.txt','this is an example', (err)=> {
//     if (err)
//     console.log(err);
//     else {
//     console.log('File was able to be written')
//     fs.readFile('example.txt', 'utf8', (err, file)=>{
//         if(err){
//             console.log(err);
//         } else {
//             console.log(file);
//         }

//     })
//     };
// });

// rename a file 
// fs.rename('example.txt', 'example2.txt', (err)=> {
//     if (err)
//     console.log(err);
//     else 
//     console.log('everthing went well!')
// });

//add more data to the file 

// fs.appendFile('example2.txt', 'some data beging change', (err)=>{
//     if(err)
//     console.log(err)
//     else
//     console.log('everthing is fine to the file')
// });

// delete file 

fs.unlink('example2.txt', (err)=>{
    if (err)
    console.log(err)
    else
    console.log('file was able to deleted, bro!')
});
