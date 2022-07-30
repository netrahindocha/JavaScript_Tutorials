console.log('This is tutorial 8');

const age = 18;
if(age == 19){
    console.log('Age is 19');
}
else if(age == 65){
    console.log('Age is 65');
}
else{
    console.log(`Age is neither 19 nor 65, age is ${age}`);
}

// == double equal to is to check value while === triple equal to is to check the value as well as type of the const/var/let i.e. whether it is a string or a number

// For example 
const bmi = '18';
if(bmi === 18){
    console.log(true);
}
else{
    console.log(false);
}
// then it will be false because we are comparing their values and string type with the number type so it does not match

// For example
const num = '18';
if(num === '18'){
    console.log(true);
}
else{
    console.log(false);
}
// then it will be true because their values and types are same i.e. string

// To check if the variable exists or not 
// const vari = 0;
if(typeof vari !== 'undefined'){
    console.log('Vari is defined');
}
else{
    console.log('Vari is not defined');
}

// AND & OR OPERATOR 

// (AND) && OPERATOR
const doesDrive = true;
if(doesDrive && age >= 18){
    console.log('You can drive');
}
else{
    console.log('You cannot drive');
}

// (OR) || OPERATOR 
if(doesDrive || age >= 18){
    console.log('You are allowed to drive');
}
else{
    console.log('You are not allowed to drive');
}

// TERNARY OPERATOR 
console.log(age == 45? 'Age is 45': 'Age is not 45');

// SWITCH CASE 
switch (age) {
    case 18:
        console.log("You are 18");
        break;

    case 28:
        console.log("You are 28");
        break;

    case 38:
        console.log("You are 38");
        break;

    default:
        console.log(`You are ${age} years old`);
        break;
}


