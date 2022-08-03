console.log('Welcome to tut 12');

let a = document;
console.log(a);

// Type of Document is object 
// console.log(typeof a);

// document.all isn't working on script but its working on console

// To access body of the HTML document
// a = document.body;
// console.log(a);

// To access form from HTML document
// a = document.forms;
// console.log(a);

// If there multiple forms, we can select specific form using
a = document.forms[0];
console.log(a);

// This will show error that forEach is not a function 
// a.forEach(function(element){
//     console.log(element);
// });
// console.log(a);

// To fetch element from any part of the document
Array.from(a).forEach(function(element){
    console.log(element);
});

// To fetch links from document 
a = document.links;
console.log(a);

// Fetch Specific Link Tag
a = document.links[0];
console.log(a);

// Fetch Only Link 
a = document.links[0].href;
console.log(a);

// Task - Use document.images and document.scripts and print the list of images and scripts on an html page

// Fetch images from document
