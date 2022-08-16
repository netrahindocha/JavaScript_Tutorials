console.log("This is tut 46");

// Regular expressions can help to find or search something

// Regular expression literal
// let reg = /harry/;

// but it it case sensitive
// let reg = /this/; //null
// let reg = /This/; //0 index

// console.log(reg); // i.e. /harry/

// The text between two forward slashes
// console.log(reg.source); // i.e. harry

// let string = "This is great code with harry and also harry";

/*
Functions to match expressions
1. exec() - This function will return an array, index & input string for match & null for no match
2. test() - Returns true or false (no array, index or input string)
3. match() - It will return the array of results or null (no index or input string)
4. search() - Returns index of first match or (-1) in null case (no array or input string)
5. replace() - Returns new replaced string with all the replacements
*/

// 1. EXEC FUNCTION 
// If there are repeated words and we call exec function twice, it will show the index of first word only
// (Before using flag)
// let result = reg.exec(string);
// console.log(result); //24 
// result = reg.exec(string);
// console.log(result); //24

// Using Global Flag (g flag)
// But if we want to show the multiple repeated words, we need to use flag
// here g is the global flag 
/*
let reg = /harry/g;

let result = reg.exec(string);
console.log(result); // 24
result = reg.exec(string);
console.log(result); //39
result = reg.exec(string);
console.log(result); //null
*/

// Using Case Insensitive Flag (i flag)
/*
let reg = /harry/i;
let string = "This is great code with hArRy and also HaRrY";
let result = reg.exec(string);
console.log(result); //24
result = reg.exec(string);
console.log(result); //24
*/

// Using g flag and i flag together
// But here, we didn't get the index of both the words, so in order to get that we use ig or gi
// Using any of the two codes, we'll get the same result
// let reg = /harry/ig;
/*
let reg = /harry/gi;

let string = "This is great code with hArRy and also HaRrY";
let result = reg.exec(string);
console.log(result); //24
result = reg.exec(string);
console.log(result); //39
// result = reg.exec(string);
// console.log(result); //null
*/

// In order to fetch the string input from the result array in console
// This wont work for null 
// console.log(result.input);
// console.log(result.index);

// 2. TEST FUNCTION 
/*
// Returns true if matches else false
// It is case sensitive 
// let reg = /harry/;
let reg = /Harry/;
let string = "This is great code with harry";
let result = reg.test(string);

// This will help to hide the error 
if(result != false){
    console.log(result);
}
OR 
if(result){
    console.log(result);
}
*/

// 3. MATCH FUNCTION 
/*
let reg = /harry/;
let string = "This is great code with harry and also harry";

// Wrong Syntax
// let result = reg.match(string);

// Correct Syntax 
let result = string.match(reg);
console.log(result);
*/

// If we have multiple repeated words in the string and we use global flag then it will return arrays of two matches
/*
let reg = /harry/g;
let string = "This is great code with harry and also harry harry";
let result = string.match(reg);
console.log(result); // (3) ['harry', 'harry', 'harry']
*/

// 4. SEARCH FUNCTION 
/*
let reg = /harry/;
let string = "This is great code with harry and also harry";

// Wrong Syntax
// let result = reg.search(string);

// Correct Syntax
let result = string.search(reg);

console.log(result); //24
*/

/*
// Global Flag doesn't work for Search function as it returns the index of the first match only
let reg = /harry/g;
let string = "This is great code with harry and also harry";
let result = string.search(reg);
console.log(result); //24
result = string.search(reg);
console.log(result); //24
*/

// For incorrect matches
/*
// Global search is case sensitive
reg = /Harry/;
result = string.search(reg);
console.log(result); //-1
*/

// 5. REPLACE FUNCTION 

let reg = /harry/;
let string = "This is great code with harry and also harry";

// Wrong Syntax
// let result = reg.replace(string);

// Correct Syntax
let result = string.replace(reg, 'netra');

console.log(result);


/*
// In order to replace multiple text in the string, we use global flag

let reg = /harry/g;
let string = "This is great code with harry and also harry";
let result = string.replace(reg, 'netra');
console.log(result);
*/