console.log("This is tut 54");

const alarmSubmit = document.getElementById('alarmSubmit');

// Add an event listener to the submit button
alarmSubmit.addEventListener('click', setAlarm);

var audio = new Audio('https://media.geeksforgeeks.org/wp-content/uploads/20190531135120/beep.mp3');

// Function to play the alarm audio
function ringBell(){
    audio.play();
}

// This function will run whenever alarm is set from the UI
function setAlarm(e){
    // By clicking on submit button, the page is reloading, to prevent this we use preventDefault
    e.preventDefault();
    const alarm = document.getElementById('alarm');
    alarmDate = new Date(alarm.value);
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);

    if(timeToAlarm >= 0){
        setTimeout(()=>{
            // console.log("ringing now");
            ringBell();
        }, timeToAlarm);
    }
}

// Create alert or error as shown in the regular expressions tutorial to highlight invalid date or time