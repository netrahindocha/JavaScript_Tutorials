console.log("This is tut 39");

// Promise: resolve, reject or pending 

/*
function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const error = true;
            if (!error) {
                console.log("Your promise has been resolved");
                resolve();
            }
            else {
                console.log("Your promise has not been resolved");
                reject('Sorry not fulfilled!');
            }
        }, 2000);
    });
}

func1().then(function(){
    console.log("Thanks for resolving");
}).catch(function(error){
    console.log("Very bad! Reason: " + error);
})
*/

// Using Promise function replacing Callback function 

const students = [
    {name: "Harry", subject: "JavaScript"},
    {name: "Rohan", subject: "Machine Learning"}
]


function enrollStudent(student){

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            students.push(student);
            console.log("Student has been enrolled");
            const error = false;
            if(!error){
                resolve();
            }
            else{
                reject();
            }
        }, 1000);
    })
}

function getStudents(){
    setTimeout(function(){
        let str = "";
        students.forEach(function(student){
            str += `<li> ${student.name} </li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Students have been fetched");
    }, 5000);
}

/*
let newStudent = {name: "Sunny", subject: "Python"};
enrollStudent(newStudent).then(function(){
    getStudents();
}).catch(function(){
    console.log("Some error occured");
})
*/

// Other syntax 
let newStudent = {name: "Sunny", subject: "Python"};
enrollStudent(newStudent).then(getStudents).catch(function(){
    console.log("Some error occured");
})

// function inside then is ran as - resolve()
// function inside catch is ran as - reject()