// Two main types of Data Types in JavaScript 

/*
Primitive Data Types 
- memory allocation in stack
- base datatype (string, numbers, boolean, null, undefined {only declared not initialized}, symbol)

Reference Data Types
- memory allocation in heap (dynamic memory allocation)
-derived objects  (arrays, object literals, functions, dates)
*/

// Strings in JavaScript

let me = "Netra";
console.log('My string is ' + me);
console.log('Datatype is ' + (typeof me));

// Numbers in JavaScript

let marks = 34;
console.log('Datatype is ' + (typeof marks));

// Boolean in JavaScript 

let isDriver = true;
console.log('Datatype is ' + (typeof isDriver));

// Null in JavaScript

let nullVar = null;
console.log('Datatype is ' + (typeof nullVar));

// Undefined in JavaScript 

let undef = undefined;
console.log('Datatype is ' + (typeof undef));

// Reference DataTypes:

// Arrays in JavaScript 
let myarr = [1, 2, 3, 4, false, "string"];
console.log('Datatype is ' + (typeof myarr));

// Object Literals in JavaScript 

let stuMarks = {
    Harry: 89,
    Shubham: 36,
    Rohan: 34
}
console.log('Datatype is ' + typeof stuMarks);

// Functions in JavaScript 

function findName() {
    
}
console.log('Datatype is ' + typeof findName);

let date = new Date();
console.log('Datatype is ' + typeof date);




