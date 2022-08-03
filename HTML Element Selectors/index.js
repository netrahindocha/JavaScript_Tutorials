console.log('Welcome to tutorial 14');

/*

Element Selectors:
1. Single Element Selector
2. Multi Element Selector

*/


// SINGLE ELEMENT SELECTOR 


// Selecting id  
element = document.getElementById('myfirst');
console.log(element);

// Selecting className
element = document.getElementsByClassName('child');
console.log(element);

// element = element.className;

// Note: Inside the childNodes, length is 1 means that there is only one node whose type is text under id 'myfirst' i.e. child 1 
// element = element.childNodes; 

// element = element.parentNode; 

// It applies color to the element that is selected by its id (inside HTML)
// element.style.color = 'red';

// It will print the text as it is inside HTML 
// element.innerText = '<b>Harry is a good boy</b>';
element.innerText = 'Harry is a good boy';

// However, it allows the text to include html tags and let it work inside HTML 
element.innerHTML = '<b>Harry is a good boy</b>';

// In order to fetch the inner HTML tags alongwith the text from an element (excluding class and id)
console.log(element.innerHTML);

// In order to fetch the inner HTML text from an element (excluding tags, class and id)
console.log(element.innerText);

// Selecting query by id (#)
// let sel = document.querySelector('#myfirst');

// Selecting query by classname (.) 
// let sel = document.querySelector('.child');

// If we have many class and divisions and we try to select all by using selecting query by tag as mentioned below, then it selects only the first class or only the first div because it is single element selector

// Selecting query by tag () 
let sel = document.querySelector('b');
sel = document.querySelector('h1');
sel = document.querySelector('div');

// It will change the color of the first div 
sel.style.color = "green";

console.log(sel);   


// MULTIPLE ELEMENT SELECTOR 

let elems = document.getElementsByClassName('child');
// We can select any one among the four elements
console.log(elems);
// console.log(elems[1]);

// If we want first division with all classes named as child
elems = document.getElementsByClassName('container');
console.log(elems[0].getElementsByClassName('child'));

elems = document.getElementsByTagName('div');
console.log(elems);

// If we do this, we get an error

// elems.forEach(element =>{
//     console.log(element);
// });

// So, we need to use Array.from() function 

// Array.from(elems).forEach(element => {
//   console.log(element);  
//   element.style.color = 'blue';
// });

// Another syntax for this could be 

// Array.from(elems).forEach(function(element){
//     console.log(element);
//     element.style.color = "blue";
// });

// To select only the paragraph part from 2nd division
elems = document.getElementsByTagName('div');
console.log(elems[5].getElementsByTagName('p'));

// But if we want to apply blue color only to the paragraph from second division named no

elems = document.getElementsByTagName('p');

// Array.from(elems).forEach(element => {
//     console.log(element);
//     element.style.color = "blue";
// });

// But if we want to apply purple color only to the heading from second division named no

elems = document.getElementsByTagName('h1');
console.log(elems[1]);
// elems[1].style.color = "purple";

elems = document.getElementsByTagName('div');
console.log(elems[5]);

// Once we select the classes or divisions, we can apply changes to each of them but if we have less class then its better not to use array and forEach 

Array.from(elems).forEach(element => {
    // Iterating all divisions 
    console.log(element);
    // Selecting h1 from div 'no'
    // console.log(elems[5].getElementsByClassName('child'));  
    element.style.color = 'purple';
});

// Because the array part and the elems[1].style.color = "purple"; part does the same job 

// Instead of Array, we can also use For Loop 

elems = document.getElementsByTagName('div');
console.log(elems[5]);

for(let index = 0; index < elems.length; index++){
    const element = elems[index];
    //Iterating all divisions
    console.log(element);
    // Selecting h1 from div 'no'
    console.log(elems[5].getElementsByClassName('child'));
}
