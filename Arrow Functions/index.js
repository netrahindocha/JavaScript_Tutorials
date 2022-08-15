console.log("This is tut 41");

// ARROW FUNCTIONS 

// Regular Function 
/*
function harry(){

    console.log("This is the best tutorial ever");
}
*/


// Another syntax:
/*
const harry = function(){

    console.log("This is the best tutorial ever");
}
*/


// Arrow Function Syntax:
const harry = ()=>{

    console.log("This is the best tutorial ever");
}
harry();


// Instead of using console log, if we create a function return a value
/*
const greet = function(){
    return "Good Morning!";
}
console.log(greet());
*/


// Converting it into Arrow Function (one liners do not require braces & return)
// as one line will automatically return 
/*
const greet = () => "Good Morning";

console.log(greet());
*/


// While returning an object using an Arrow Function, always use parenthesis:

// This will bring an error 
// const greet = () => {name: "Netra"};

// Using parenthesis:
/*
const greet = () => ({name: "Netra", age: "21"}); 

console.log(greet());
*/

// Greet Using Name 

// Single parameter does not need parenthesis 
// const greet = name => "Good Morning " + name + "!";

// but it will be required if there are multiple parameters
const greet = (name, ending) => "Good Morning " + name + "! " + ending;

console.log(greet('Netra', 'How are you?'));
