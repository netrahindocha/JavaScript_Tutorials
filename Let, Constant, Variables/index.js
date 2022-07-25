console.log('check');

// Variables in JavaScript 

var me = "Netra";
var designation;
// var salary = 5000000;
var salary = '50L';
designation = 'FrontEnd Developer';
console.log(me, designation, salary);

// Rules for creating JavaScript Variables

/*
1. Cannot start with numbers 
2. Can start with letter, numbers, underscore or dollar
3. Are case sensitive
*/
var city = 'Delhi';
console.log(city);

// Constants in JavaScript 

const ownersName = 'hariRam';
// ownersName = 'harry'; // Cannot do this
console.log(ownersName);
const fruit = 'Orange';

// let has block level scope
// var has global scope

// {This is called a block ( block lies inside curly braces)}

// Let in JavaScript 

{
    let city = 'Rampur';
    city = 'Kolkata';
    console.log(city); // Kolkata replaced Rampur
}

console.log(city); // Delhi

// Important datatypes in JavaScript 

// 1 Numbers
// 2 Array 
// 3 Strings 
// 4 Objects

const arr1 = [12, 23, 12, 53, 3];
// arr1 = [34, 23, 23]; // Cant do this
arr1.push(45); //push adds element to an array
console.log(arr1);

// Most common programming case types:

/*
1. camelCase
2. kebab-case
3. snake_case
4. PascalCase
*/


