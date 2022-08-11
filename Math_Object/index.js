console.log('Welcome to tut 23');

let x = 3;
let y = 6;
let z;
z = x + y;
z = x - y;
z = x * y;
z = x / y;

// Exploring the Math object 
z = Math;
z = Math.PI;
z = Math.E;

// POSITIVE VALUES

// Ceil Function (Maximum)
z = Math.ceil(5.4); //6
z = Math.ceil(5.5); //6
z = Math.ceil(5.6); //6

// Round Function
z = Math.round(5.4); //5
z = Math.round(5.5); //6
z = Math.round(5.6); //6

//Floor Function (Minimum)
z = Math.floor(5.4); //5
z = Math.floor(5.5); //5
z = Math.floor(5.6); //5

console.log(z);

// NEGATIVE VALUES  

// Ceil Function (Maximum)
z = Math.ceil(-5.6); // -5
z = Math.ceil(-5.5); // -5
z = Math.ceil(-5.4); // -5

// Round Function (Minimum)
z = Math.round(-5.6); // -6
z = Math.round(-5.5); // -5
z = Math.round(-5.4); // -5

// Floor Function 
z = Math.floor(-5.6); // -6
z = Math.floor(-5.5); // -6
z = Math.floor(-5.4); // -6

console.log(z);
// 6
// 5.6
// 5.5
// 5.4
// 5
// -5
// -5.4
// -5.5
// -5.6
// -6

// Absolute Function (Positive)
z = Math.abs(-5.6); // 5.6
z = Math.abs(5.4); //5.4

console.log(z);

// Squareroot Function 
z = Math.sqrt(5);
z = Math.sqrt(64);

console.log(z);

// Power Function 
z = Math.pow(2, 4);

console.log(z);

// Minimum Function 
z = Math.min(2, 3, 34, 234, 2342, 34);

console.log(z);

// Maximum Function 
z = Math.max(2, 3, 34, 234, 2342, 34);

console.log(z);

// Generating Random Number 
z = Math.random();

console.log(z);

// If we want the random number to lie between 0 and 100 
z = 100 * Math.random();

console.log(z);

// If we want the random number to lie between 50 and 100
z = 50 + (100 - 50) * Math.random();

console.log(z);

//If we want the random number to be integer instead of float, range of random number is between 50 and 53
z = Math.round(50 + (53 - 50) * Math.random());

console.log(z);

// If we use ceil function, its range would exclude 50, i.e. 51 to 53
// If we use floor function, its range would exclude 53, i.e. 50 to 52
// If we use floor function, its range be 50 to 53