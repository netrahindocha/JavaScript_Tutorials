// Type Conversion & Type Coercion 

console.log("Welcome to Harry's Tutorial");

// TYPE CONVERSION 

// Number to String 

let myVar = 34;
console.log(myVar, (typeof myVar));
myVar = String(34);
console.log(myVar, (typeof myVar));

// Bool to String 

let boolVar = true;
console.log(boolVar, (typeof boolVar));
boolVar = String(true);
console.log(boolVar, (typeof boolVar));

// Object to String 

let date = new Date();
console.log(date, (typeof date));
date = String(new Date());
console.log(date, (typeof date));

// Array to String 

let arr = [1, 2, 3, 4, 5];
console.log(arr, (typeof arr));
arr = String([1, 2, 3, 4, 5]);
console.log(arr, (typeof arr));

// Length of Array vs Length of String 

arr = [1, 2, 3, 4, 5];
console.log('Size of arr is ' + arr.length); //5

arr = String([1, 2, 3, 4, 5]);
console.log('Size of string(arr) is ' + arr.length); //9

// Number to String using toString() 

let i = 8;
console.log(i);
console.log(i.toString());
// after using .toString function, it turns from blue to black color in console inside inspect section 

// Bool to String using toString() 

let yes = true;
console.log(yes);
console.log(yes.toString());

// Object to String using toString() 

let obj = new Date();
console.log(obj, (typeof obj));
console.log(obj.toString(), (typeof obj.toString()));

// Array to String using toString() 

let arrOne = [2, 4, 6, 8, 10];
console.log(arrOne, 'Length of arrOne is ' + arrOne.length);
console.log(arrOne.toString(), 'Length of arrOne is ' + arrOne.toString().length);

// One problem with toString function is that it does not change the length and typeof the variable if we dont use toString while taking out its length i.e. var.toString().length and while taking out its type i.e. typeof var.toString

// String to Number 

let stri = "3434";
console.log(stri, typeof stri);

stri = Number("3434");
console.log(stri, typeof stri);

// If the string does not contain number and we try to convert it into a number 

stri = Number("34net34");
console.log(stri, typeof stri);
// then it shows NaN, it means it is 'Not a Number'

// If the string contains boolean value and we try to convert it into a number 

stri = Number(true);
console.log(stri, typeof stri);
// then it shows 1 without any error because it is default behaviour 

// Same for false --> 0 (default)
stri = Number(false);
console.log(stri, typeof stri);

// parseInt 

let num = '34.098';
console.log(num, typeof num);

num = parseInt('34.098');
console.log(num, typeof num); //34 'number'

num = Number('34.098');
console.log(num, typeof num); //34.098 'number'

// .toFixed(x) function, x = decimal places

// It will show the number in decimal but till decimal places that we want i.e. 

// rounding off to 2 decimal places
num = Number('34.098');
console.log(num.toFixed(2), (typeof num));

// rounding off to 4 decimal places
num = Number('34.098');
console.log(num.toFixed(4), (typeof num));

// TYPE COERCION 

let mystr = "698";
let mynum = 34;

console.log(mystr + mynum);

// It always converts number into string and concatenates 

// When we convert string into number and try to concatenate, we will get different output 

mystr = Number("698");
mynum = 34;

console.log(mystr + mynum);