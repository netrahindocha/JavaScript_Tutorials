console.log("This is tut 43");

// Without using async, it will return the string value not a promise
/*
function netra(){
    console.log("Inside netra function");
    return "netra";
}

console.log("Before calling netra");
let a = netra();
console.log("After calling netra");
console.log(a);
console.log("Last line of this js file");
*/

// By using async we can return promise instead of a string

/*
async function netra(){
    console.log("Inside netra function");
    return "netra";
}

console.log("Before calling netra");
let a = netra();
console.log("After calling netra");
console.log(a);
console.log("Last line of this js file");
*/

// When we used Fetch API, we had to insert .then twice, but using async/await we can 

// Fetch API 
/*
function netra(){
    fetch("https://api.github.com/users").then((response)=>{
        return response.json();
    }).then((users)=>{
        console.log(users);
    })
}
netra();
*/

// Using async 
/*
async function netra(){
    const response = await fetch('https://api.github.com/users');
    const users = await response.json();
    return users;
}
netra().then(data => console.log(data));
*/

// To check the flow of the statements 

async function netra(){
    console.log("Inside netra function");
    const response = await fetch("https://api.github.com/users");
    console.log("Before response");
    const users = await response.json();
    console.log("Users resolved");
    return users;
}
// Instead of calling the function directly, we store it in a variable 
console.log("Before calling netra");
// This will show promise pending because it is still awaiting asynchronously
let a = netra();
console.log("After calling netra");
console.log(a);
// a.then() statement will not execute till the data is fetched, so it will skip the statement to come back later and for now it will print the next statement
a.then(users => console.log(users));
console.log("Last line of this js file");