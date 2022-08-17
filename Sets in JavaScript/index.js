console.log("This is tut 58");

// Set stores unique values
// Initialize an empty set
const mySet = new Set(); 
// console.log('The set looks like:', mySet);

// Adding values to this set
mySet.add('this');
mySet.add('My name');
// Second this will not appear in the set as it only takes unique values
mySet.add('this');
mySet.add('that');
mySet.add(34);
mySet.add(true);
mySet.add(false);
mySet.add('that2');
// console.log('The set looks like this now:', mySet);

// Use a constructor to initialize the set
// let mySet2 = new Set([1, 45, 'this', false, {a: 4, b:8}, 'this']);
// console.log('New Set:', mySet2);

// Get the size of the set
// Shows only the size of unique entries
// console.log(mySet.size);

// Check whether element in present in the set or not - Prints true if present else false
// console.log(mySet.has(34)); //true
// console.log(mySet.has(346)); //false

// Removing element from set
// console.log('Before removal', mySet.has('that2'));
// mySet.delete('that2');
// console.log('After removal', mySet.has('that2'));

// Iterating a set by three methods:

// Using for of loop:
// for(let item of mySet){
//     console.log('Item is: ', item);
// }

// Using for Each:
// mySet.forEach((item)=>{
//     console.log('Item is: ', item);
// })

// Array from and for Each:
// Array.from(mySet).forEach((item)=>{
//     console.log('Item is: ', item);
// })
// (Its working since its removing repeated elements and showing only unique elements)

// Quiz - Converting set into array
let arr = Array.from(mySet);
console.log(arr);
