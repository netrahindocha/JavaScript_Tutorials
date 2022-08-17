console.log("This is tut 59");

// Symbols
const sym1 = Symbol('My identifier');
const sym2 = Symbol('My identifier');
// console.log(sym1);
// console.log('Type of symbol is: ', typeof sym1);

// Symbols are unique in themselves
// console.log(sym1 === sym2);

// Comparing strings
const a = "this is";
const b = "this is";
// Since strings are same, it will return true
// console.log(a === b);

// console.log(null === null);
// console.log(undefined === undefined);

const k1 = Symbol('identifier for k1');
const k2 = Symbol('identifier for k2');

myObj = {};
myObj[k1] = "Harry";
myObj[k2] = "Rohan";
myObj["name"] = "Good boy";
myObj[4] = "Good int";

// console.log(myObj);

// To fetch any key value
// console.log(myObj[k1]);
// console.log(myObj[k2]);
// We cannot use dot because it will search k2 named string, so we can use only bracket syntax
// console.log(myObj.k2); // it is same as console.log(myObj["k2"]);

// Symbols are ignored in for in loop
for(key in myObj){
    console.log(key, myObj[key]);
}

// To convert object into JSON
console.log(JSON.stringify(myObj));



