//create a folder 

const fs = require('fs');
// fs.mkdir('random', (err)=>{
//     if(err)
//     console.log(err)
//     else {
//         fs.writeFile('./random/example.txt', '1,2,3', (err)=>{
//             if(err)
//             console.log(err)
//             else 
//             console.log('succseffuly created file')
//         })
//     }})

//delete a file in a folder / delete a folder 

// fs.unlink('./random/example.txt', (err)=>{
//     if(err){
//         console.log(err)
//     } else {
//         fs.rmdir('random', (err)=>{
//             if(err){
//                 console.log(err)
//             } else {
//                 console.log('deleted the file');
//             }
        
//         });
//     }
// });

//deleted file

fs.readdir('example', (err,files)=>{
    if(err)
    console.log(err);
    else{
        //console.log(files);
        for(let file of files){
            fs.unlink('./example/' + file, (err)=>{
                if (err)
                console.log(err)
                else{
                    console.log('file was deleted perfectly')
                }
            })
        }
        
    }

});