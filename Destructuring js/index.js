console.log("This is tut 60");

// Destructuring in JavaScript

let a, b;
[a, b] = [34, 564];
// console.log(a, b);

let c, d;
// [a, b, c, d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// console.log(a, b, c, d); // 1 2 3 4

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// These three dots will make everything else to store into d as an array
// console.log(a, b, c, d);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// ARRAY DESTRUCTURING
// It will make everything else to store as an object
({a, b, c, ...d} = {a: 34, b: 345, c: 67, d: 45, e:34});
// console.log(a, b, c, d);

const fruits = ['Apples', 'Bananas', 'Mangoes'];

// Rest element must be the last element only, we cannot apply dots to a and b in this case
// [a, b, ...c] = fruits;

[a, b, c] = fruits;
console.log(a, b, c);

// OBJECT DESTRUCTURING 

const laptop = {
    model: "HP Pavilion",
    life: "6 years",
    covering: "Metallic",
    net: 1233,
    start: function(){console.log('started')}
}

const {model, life, covering, net, start} = laptop
console.log(model, life, covering, net, start);
start();
