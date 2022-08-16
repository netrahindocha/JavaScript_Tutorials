console.log("This is tut 51");

// Iterators

function fruitsIterator(values){
    let nextIndex = 0;
    // We will return an object
    return {
        next: function(){
            if(nextIndex < values.length){
                // We will return below object
                // Object is enclosed by curly braces
                return {value: values[nextIndex++],
                done: false}
            }
            else{
                // We will return below object with only done
                return {done: true}
            }
        }
    }
}

const myArr = ['Apples', 'Grapes', 'Oranges', 'Ladyfinger'];
console.log("My array is ", myArr);

// Using the iterator

const fruits = fruitsIterator(myArr);
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());
// console.log(fruits.next());

// To fetch only the values

console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);





