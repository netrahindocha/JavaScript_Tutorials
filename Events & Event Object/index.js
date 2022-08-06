console.log("this is tut 17");

document.getElementById("heading").addEventListener("mouseover", function(e){
    let variable;
    console.log("You have clicked the heading");

    variable = e.target;
    variable = e.target.id;
    variable = e.target.className;
    variable = e.target.classList;

    // Convert it to Array 
    variable = Array.from(e.target.classList);

    // Distance relative to element
    variable = e.offsetX;
    variable = e.offsetY;
    
    // Distance relative to entire browser window
    variable = e.clientX;
    variable = e.clientY;

    console.log(variable);
    // location.href = '//codewithharry.com';
});