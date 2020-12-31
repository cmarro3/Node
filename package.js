const _ = require('gulp');
let example = _.fill([1,2,3,4,5], 'kitty', 1, 4);
console.log(example);
// this code should print out a new array with kitty in it 
// but code is not working becuase .fill is not a function 
 