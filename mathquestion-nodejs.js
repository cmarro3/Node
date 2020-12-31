const read = require('readline'); // readline is a module we use import
const rl = read.createInterface({input: process.stdin, 
output: process.stdout});

let num1 = Math.floor(Math.random() *10 + 1)
let num2 = Math.floor(Math.random() *10 + 1)
let answer = num1 + num2;

rl.question('What is ' + num1 + ' + ' + num2 +' ? \n', (userinput) =>{
    if (userinput.trim() == answer){
        rl.close();
    } else{
        rl.setPrompt('Wrong, try again \n');
        rl.prompt();
        rl.on('line', (userinput)=>{
            if(userinput.trim() == answer)
            rl.close();
            else{
                rl.setPrompt('Your anwser of ' + userinput + ' is wrong try again\n')
                rl.prompt();
            }

        })
    }
});

rl.on('close', ()=>{
    console.log('you got the question right!')

});