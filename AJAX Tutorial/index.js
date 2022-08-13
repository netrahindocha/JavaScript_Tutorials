console.log("This is Ajax tutorial");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler(){
    console.log('You have clicked fetchBtn');
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object 

    // GET REQUEST 
    // xhr.open('GET', 'index.txt', true);
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);

    // POST REQUEST
    xhr.open('POST', 'https://dummy.restapiexample.com/api/v1/create', true);
    // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");  
    xhr.getResponseHeader("Content-type", "application/x-www-form-urlencoded");  

    // true for asynchronous and false to use synchronous
    // GET means fetching the data while sending the URL and POST means sending the data alomgwith URL and we'll get response according to the data we sent 

    // What to do on progress (optional as we don't want to track the progress everytime)
    // We use onprogress when we want to show spinner or loader in the website
    xhr.onprogress = function(){
        console.log('On progress');
    }

    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState (to understand readyState)
    // xhr.onreadystatechange = function(){
    //     console.log("ready state is ", xhr.readyState);
    // }

    // What to do when response is ready (it won't work until we send the request)
    xhr.onload = function(){
        // We can check the status within onload
        if(this.status === 200){
            console.log(this.responseText);
        }
        else{
            // console.log("Some error occurred");
            console.error("Some error occurred");
        }
    }

    // Send the request
    params = `{"name":"test","salary":"123","age":"23"}`
    xhr.send(params);

    console.log("We are done!"); 
    // this appears first before the data because we used asynchronous operation, it prevents code blocking

    // trying synchronous operation (instead of true, we put false)
}

let popBtn = document.getElementById("popBtn");
popBtn.addEventListener('click', popHandler);

function popHandler(){

    console.log('You have clicked popBtn');
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // Open the object 

    // GET REQUEST 
    // xhr.open('GET', 'index.txt', true);
    xhr.open('GET', 'https://dummy.restapiexample.com/api/v1/employees', true);  

    // true for asynchronous and false to use synchronous
    // GET means fetching the data while sending the URL and POST means sending the data alomgwith URL and we'll get response according to the data we sent 

    // What to do when response is ready (it won't work until we send the request)
    xhr.onload = function(){
        // We can check the status within onload
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for(key in obj){
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occurred");
        }
    }

    // Send the request
    xhr.send();

    console.log("We are done fetching employees!"); 

}
