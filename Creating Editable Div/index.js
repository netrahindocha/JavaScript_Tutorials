console.log('This is tut 20');

// typeof localStorage is "object"

// SET ITEM & GET ITEM IN LOCAL STORAGE

// Set adds key-value pair in Local Storage located inside application under inspect 
localStorage.setItem('Name', 'Netra');
localStorage.setItem('Name2', 'Harry');

// window.localStorage.Name in console 

// Same thing to execute using JavaScript 
let userName = localStorage.getItem('Name');
console.log(userName);
// Get retrieves an item from Local Storage to console 
userName = localStorage.getItem('Name2');
console.log(userName);

// CLEARS THE ENTIRE LOCAL STORAGE INSIDE APPLICATION UNDER INSPECT
// localStorage.clear();

// CLEAR PARTICULAR KEY-VALUE PAIR FROM LOCAL STORAGE 
localStorage.removeItem('Name2');

// In order to print output in string form, we'll use JSON.stringify
let impArr = ['ginger', 'onion', 'ladyfinger'];
// localStorage.setItem('Veggies', impArr);   
localStorage.setItem('Veggies', JSON.stringify(impArr)); 
// Note the difference between outputs in console when changing impArr (output - array) to JSON.stringify(impArr) (output - string)

// This gives the output in string form
let userVeg = localStorage.getItem('Veggies');
console.log(userVeg);   

// In order to convert string to array, we'll use JSON.parse
userVeg = JSON.parse(localStorage.getItem('Veggies'));
console.log(userVeg)

// Its better to use array instead of string because if we want to remove onions from the Veggies, array would be convenient


