const EventEmitter = require('events');
//NOTE: the reason why we set require to 'events' is to bring in 
//the events module which listens to when ever it's being called
const eventEmitter = new EventEmitter();

eventEmitter.on('random', (num1,num2) =>{
console.log(num1+num2)
});

eventEmitter.emit('random',1,2)

class person extends EventEmitter {
    constructor(name){
        super();
        this._name = name;

    }
    get name(){
        return this._name;
    }

}

let christopher = new person('Christopher');
let jackie = new person('jackie');
jackie.on('name', ()=>{
    console.log('my name is ' + jackie.name)
})
christopher.on('name', () => {
    console.log('my name is ' + christopher.name)

})
christopher.emit('name');
jackie.emit('name');