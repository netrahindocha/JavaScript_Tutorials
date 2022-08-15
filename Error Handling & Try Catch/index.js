console.log("This is tut 44");

// Pretend this is coming from a server as response 
let a = "Netra";
a = undefined;
if(a != undefined){
    throw new Error("This is defined");
}
else{
    console.log("This is undefined");
}

try{
    // uidghiuehoih (trying wrong syntax to create custom error)
    console.log("We are inside try block");
    netra();
} catch(error){
    console.log("Are you okay?");
    // Printing reference error in text form instead of a warning
    console.log(error);
    // To check the type of an error 
    console.log(error.name);
    // To check the message inside the error
    console.log(error.message);
} finally {
    // It will run irrespective of try and catch
    console.log("Finally we will run this even if error occurs or not");
}