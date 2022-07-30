console.log('This is tut 10');

function greet(name1){
    console.log(`Happy Birthday ${name1}! How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. Happy birthday my friend!`);
}

let name1 = 'SkillF';
let name2 = 'Rohan';
greet(name1);

// New Task (try creating array of names and use elements to wish all of them)

let frnds = ['Chand', 'Netra', 
'Malav', 'Kalpit'];

let wish = 'May your all wishes be fulfilled.';

frnds.forEach(function(element){
    console.log(`Happy Birthday ${element}! How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. Happy birthday my friend! ${wish}`);
});

// Anonymous Function - func name not defined
const myobj = {
    user: 'SkillF',
    game: function(){
        return "GTA";
    }
}
console.log(myobj.game());

arr = ['fruits', 'vegetables', 'furniture'];
arr.forEach(function(element, index, array){
    console.log(element, array, index);
});

// SCOPE IN JAVASCRIPT

// let/const has block level scope and var has function level scope

var i = 234;
console.log(i);
function ui(name){
    var i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}
console.log(ui("harry"), i)

