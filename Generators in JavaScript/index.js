console.log("This is tut 53");

// Generators in JavaScript

// Syntax 
function* numbersGen(){
    let i = 0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;
    while(true){
        // yield i++;
        // To change it to string
        yield (i++).toString();
    }
}

let gen = numbersGen();
// console.log(gen.next());

// To get only values
console.log(gen.next().value);
