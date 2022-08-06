console.log('this is tut 16');

// CREATING ELEMENT 

let element = document.createElement('li');
let text = document.createTextNode('I am a text node');
element.appendChild(text);

// Add a classname to the li element 
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle');
// element.innerText = 'Hello this is created by Netra';

let ul = document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);
console.log(element);

// Its not possible to use bold tag in innerText, however it works in innerHTML

// element.innerHTML = '<b>Hello this is created by Netra</b>';

// REPLACING ELEMENT 

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is a created node for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2);

let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));

// REMOVING ELEMENT 

// myul.removeChild(document.getElementById('lui'));

// Fetch attribute from element for eg its id or its classname 
let pr = elem2.getAttribute('id');
console.log(elem2, pr);

// To check if the element contains the attribute or not 
pr = elem2.hasAttribute('href'); // true or false
console.log(pr);
elem2.removeAttribute('id');
console.log(elem2);
elem2.setAttribute('title', 'myelem2title');
console.log(elem2, pr);

// Quick Quiz 

// Create a heading element with text as "Go to CodeWithHarry" and create an a tag outside it wth href = "https://www.codewithharry.com"

let newDiv = document.querySelector('#harry');

let link = document.createElement('a');
link.setAttribute("href", "https://www.codewithharry.com");
newDiv.appendChild(link);

let newHeading = document.createElement('h1');
newHeading.className = 'heading';
link.appendChild(newHeading);

let title = document.createTextNode('Go to CodeWithHarry');
newHeading.appendChild(title);

console.log(newDiv);

