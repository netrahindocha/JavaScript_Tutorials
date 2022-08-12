console.log('This is tut 30');

// Creating Proto Object 
// const proto = {

//     slogan: function(){
//         return `This company is the best`;
//     },
//     changeName: function(newName){
//         this.name = newName
//     }
// }

// This creates netra object
// const netra = Object.create(proto);
// netra.name = "Netra";
// netra.role = "Programmer";

// Using changeName function
// netra.changeName("Net");
// console.log(netra);

// Old syntax for creating netra object
// const netra = Object.create(proto, {
//     name: {value: 'netra'},
//     role: {value: 'programmer'}
// });

// Using changeName function
// console.log(netra);
// netra.changeName('Nitara');
// console.log(netra);
// This could not be able to change the name because it needs 'writable'

// Allowing to change name 
// const netra = Object.create(proto, {
//    name: {value: 'Netra', writable: true},
//    role: {value: 'Programmer'} 
// });

// Using changeName function

// netra.changeName('Nitara');
// console.log(netra);

// Task - Trying same for role

const proto = {

    slogan: function(){
        return `This company is the best`;
    },
    changeName: function(newName){
        this.name = newName
    },
    changeRole: function(newRole){
        this.role = newRole
    }
}

// const netra = Object.create(proto, {
//     name: {value: 'netra', writable: true},
//     role: {value: 'programmer', writable: true}
// });

// netra.changeName('net');
// netra.changeRole('Web Developer');
// console.log(netra);

// Employee Constructor 

function Employee(name, salary, experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan 

Employee.prototype.slogan = function(){
    return `This company is the best! Regards, ${this.name}.`;
}

// Object 

let netraObj = new Employee('Netra', '50L', 2);
console.log(netraObj.slogan());

// Programmer

function Programmer(name, salary, experience, language){
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype

Programmer.prototype = Object.create(Employee.prototype);
let Harry = new Programmer('harry', '30L', 5, 'JavaScript');
// console.log(Harry);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;
console.log(Harry);

