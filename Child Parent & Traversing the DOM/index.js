console.log('Welcome to tut 15');

let cont = document.querySelector('.no');
cont = document.querySelector('.container');
// console.log(cont);

let nodeName = cont.childNodes[0].nodeName;
// console.log(nodeName);
let nodeType = cont.childNodes[0].nodeType;
// console.log(nodeType); // 3

// Node Types 
// 1. Element
// 2. Attribute
// 3. Text Node 
// 8. Comment  
// 9. Document
// 10. DOCTYPE

// childNodes shows the new line as text and also shows comments
console.log(cont.childNodes); // length - 13
// children shows only the tags that we used in html excluding new line (in the form of text) and comments
console.log(cont.children); // length - 6 (mostly used)

let container = document.querySelector('div.container');
// console.log(container.children[1].children[0].children);

console.log(container.firstChild); //first childNode
console.log(container.firstElementChild); //first children

console.log(container.lastChild); //first childNode
console.log(container.lastElementChild); //first children

console.log(container.childElementCount); // 6 - count of child elements

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling); //next to next sibling