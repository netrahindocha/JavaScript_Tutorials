// Exercise 1

// You have to create a variable which is a string containing the text which is a link you are interested in.

// You have to fetch all the links from a given page which contains this text

let search = 'google';
Array.from(document.links).forEach(function(element){
    if(element['href'].includes(search)){
        // console.log(element);
        console.log(element['href']);
    }
});

search = 'linkedin';
Array.from(document.links).forEach(function(element){
    if(element['href'].includes(search)){
        console.log(element['href']);
    }
});


