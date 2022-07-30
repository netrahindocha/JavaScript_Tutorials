console.log('We are at tutorial 9');
// console.log(1);
// console.log(2);
// console.log(3);

// Incrementing values by two ways: 
let a = 34;
a += 1;
a++;
console.log(a);

// General Loops: for, while. do-while

// For Loop 
for(let i = 0; i < 10; i++){
    console.log(i);
}

// While Loop 
let j = 0;
while(j<10){
    // console.log(j);
    // j++;
    console.log(j++);
}

// Do While Loop
let k = 0;
do{
    // console.log(k);
    // k++;
    console.log(k++);
}while(k<10);

// Break & Continue

// Break 
let l = 0;
do{
    console.log(l);
    if(l === 5){
        break;
    }
    l++;
}while(l<10);
console.log('done');

// Continue 
let m = 4;
do{
    if(m === 5){
        m++;
        continue;
    }
    console.log(m);
    m++;
}while(m<10);
console.log('done');
// 4 6 7 8 9 


// Two ways to print the elements of an array

let arr = [2, 5, 6, 4, 2, 3];
// Using Function 
arr.forEach(function(element){
    console.log(element);
});

// Using For Loop 
for(let i = 0; i < arr.length; i++){
    const element = arr[i];
    console.log(element);
}

// One more example using function 
let brr = [2, 4, 6, 8, 10];
brr.forEach(function(element, index, array){
    console.log(element, index, array);
});

// Creating an object
let obj = {
    name: "Rohan Das",
    age: 78,
    type: "Dangerous Programmer",
    os: "Ubuntu"
}

// Printing key of the object
for (let key in obj){
    console.log(`The ${key} of object is ${obj[key]}`); 
}

