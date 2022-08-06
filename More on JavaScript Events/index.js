console.log('this is tut 18');

let btn = document.getElementById('btn');
// btn.addEventListener('click', func1(){

// })

// Another syntax is:

btn.addEventListener('click', func1);
btn.addEventListener('dblclick', func2);
// btn.addEventListener('mousedown', func3);

// function func1(e){
//     console.log("Thanks", e);
// }

// If we change the input type of the button to default and click submit, it print thanks and then it submits the form and opens none.html

// If we don't want it to open none.html, we use .preventDefault()

function func1(e){
    console.log("Thanks", e);
    e.preventDefault();
}

// If we change the event from click to dblclick, it won't work because the form will be submitted on first click, so we need to prevent default for one click event

function func2(e){
    console.log("Thanks its a double click", e);
    e.preventDefault();
}

// function func3(e){
//     console.log("Thanks its a mouse down", e);
//     e.preventDefault();
// }

// document.querySelector('.no').addEventListener('mouseenter', function(){
//     console.log('You entered no');
// })

// document.querySelector('.no').addEventListener('mouseleave', function(){
//     console.log('You exited no');
// })

document.querySelector('.container').addEventListener('mousemove', function(e){
    // console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetX}, ${e.offsetX + e.offsetY})`;
    console.log(`rgb(${e.offsetX}, ${e.offsetX}, ${e.offsetX + e.offsetY})`);
})







