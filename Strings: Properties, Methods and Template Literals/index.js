console.log('We are at Tut 6');

// Space between words

let user = "Harry";
let greeting = "Good Morning ";
console.log(greeting + user + '!');

user = "Netra";
greeting = "Good Evening";
console.log(greeting + ' ' + user + '!');

// Concatenation using concat() function 

let html;
html = '<h1> this is heading </h1>' + '<p> this is My paragraph </p>';

html = html.concat(' this ' + 'string');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html); 
// Upper and lower case does not affect the original input stored in the variable 

// Character Index Value

console.log(html[0]);
console.log(html[1]);

// Substring Index Value 

console.log(html.indexOf('this'));
console.log(html.indexOf('h1'));
console.log(html.indexOf('hssdfsd1'));
// If substring is not present it will print -1 

// First and Last Occurrence 
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));

// Finding Character at Random Index 
console.log(html.charAt(0));
console.log(html.charAt(47));

// Check if String Ends With Substring 
console.log(html.endsWith('string')); //true
console.log(html.endsWith('this')); //false

// Check if the String Includes Substring 
console.log(html.includes('dsfsdfd'));  //false
console.log(html.includes('is')); //true

// Extract Substring from String 

// USING SUBSTRING
console.log(html.substring(1, 3)); //1 and 2
console.log(html.substring(1, 7)); //1 to 6

// USING SLICE (neg works only for slice)
console.log(html.slice(-4)); //last five characters of the string
console.log(html.slice(1, 7)); //1 to 6


// split() function will help to split all the elements according to the required criteria for eg space or each characters 
console.log(html.split(' '));
console.log(html.split(''));
console.log(html.split('>'));

// replace() function helps to replace word from first occurrence
console.log(html.replace('this', 'it'));

// replaceAll() function helps to replace word from all occurrences 
console.log(html.replaceAll('this', 'it'));

// TEMPLATE LITERALS 

let fruit1 = 'Orange';
let fruit2 = 'Apple'; 
let myHtml = `Hello ${user}!
            <h1> This is heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;
document.body.innerHTML = myHtml;

