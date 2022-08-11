console.log('Welcome to tut 24');

let today = new Date();
console.log(today);

// typeof today is object 

// Format to Enter Other Date than Today 

let otherDate = new Date('8-4-2003 04:54:08');
console.log(otherDate);

otherDate = new Date('June 13 1976');
console.log(otherDate);

otherDate = new Date('06/13/1976');
console.log(otherDate);

otherDate = new Date('06-13-1976');
console.log(otherDate);

// Reference 

otherDate = new Date('8-4-2003 04:54:08');
console.log(otherDate);
let a;

// Get Day 
a = otherDate.getDay();
console.log(a + ', Day'); // 0 means Thursday

// Get Date 
a = otherDate.getDate();
console.log(a + ', Date'); // 13

// Get Month 
a = otherDate.getMonth();
console.log(a + ', Month');
// Because, here counting starts from 0

// Get Year 
a= otherDate.getFullYear();
console.log(a + ', Year');

// Get Hours 
a = otherDate.getHours();
console.log(a + ', Hours');

// Get Minutes 
a = otherDate.getMinutes();
console.log(a + ', Minutes');

// Get Seconds 
a = otherDate.getSeconds();
console.log(a + ', Seconds');

// Get Time
a = otherDate.getTime();
console.log(a + ', Time');

// Get Milliseconds 
a = otherDate.getMilliseconds();
console.log(a + ', Milliseconds');

// Set Date 
otherDate.setDate(23);
console.log(otherDate);

// Set Month 
otherDate.setMonth(0); // 0 means January
console.log(otherDate);

// Set Full Year 
otherDate.setFullYear(1900);
console.log(otherDate);

// Set Hours
otherDate.setHours(1);
console.log(otherDate);

// Set Minutes
otherDate.setMinutes(2);
console.log(otherDate);

// Set Seconds
otherDate.setSeconds(3);
console.log(otherDate);


