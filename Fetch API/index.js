console.log("This is tut 42");

// button with id myBtn
let myBtn = document.getElementById("myBtn");

// div with id content
// let content = getElementById("content");

// GET REQUEST 
// Syntax for Fetch API 
/*
function getData(){
    url = "index.txt";
    fetch(url).then((response)=>{
        return response.text();
    }).then((data)=>{
        console.log(data);
    })
}
getData();
*/

// To know how it works by the order of statements that are executed 
/*
function getData(){
    console.log("Started running getData");
    url = "index.txt";
    fetch(url).then((response)=>{
        console.log("Inside first then");
        return response.text();
    }).then((data)=>{
        console.log("Inside second then");
        console.log(data);
    })
}

console.log("Before running getData");
getData();
console.log("After running getData");
*/

// Fetch JSON data 
/*
function getData(){
    url = "https://api.github.com/users";
    fetch(url).then((response)=>{
        // To get the data in json form, replace response.text() to response.json() 
        // text() will show the data in the form of text but json() will show the data in the form of object (it will parse the data)
        return response.json();
    }).then((data)=>{
        console.log(data);
    })
}
getData();
*/

// POST REQUEST 
// We used JSON.stringify() to convert object into string but if we create the data in the form of string, then we don't need to stringify it 
// we this to create data in string 
// data = ''; 
// or use this to convert data object into data string 
// Since it is one liner, we didn't use braces 
// body: JSON.stringify(data);

function postData(){
    url = "https://jsonplaceholder.typicode.com/posts";
    data = '{"name":"netra3586587362","salary":"123","age":"23"}';
    params = {
        method: 'post',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response=> response.json())
    .then(data=> console.log(data))
}
postData();