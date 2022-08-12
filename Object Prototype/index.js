console.log('This is tut 28');

// Object Literal : Object.prototype

let obj = {
    name: 'netra',
    designation: 'Web Developer',
    address: 'Mars'
}

function Obj(givenName){
    this.name = givenName
}
let obj2 = new Obj('Nuts');
console.log(obj2);

// NOTE : Without using new keyword, we'll get the output as undefined

// Editing Prototype 
Obj.prototype.getName = function(){
    return this.name;
}

Obj.prototype.setName = function(newName){
    this.name = newName;
}

obj2 = new Obj('Harry');
console.log(obj2.toString());

