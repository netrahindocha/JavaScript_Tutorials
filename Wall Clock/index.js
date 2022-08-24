console.log("This is tut 62");

function updateClock() {
    // Get the current Date
    let currentTime = new Date();

    // Extract hours, mins & secs from the date
    let currentHour = currentTime.getHours();
    let currentMins = currentTime.getMinutes();
    let currentSecs = currentTime.getSeconds();

    // Pad 0 if min or sec is less than 10 (single digit)
    currentHour = (currentHour < 10 ? "0" : "") + currentHour;
    currentMins = (currentMins < 10 ? "0" : "") + currentMins;
    currentSecs = (currentSecs < 10 ? "0" : "") + currentSecs;

    // Choose AM/PM as per the time of the day
    let timeOfDay = (currentHour < 12) ? "AM" : "PM";

    // Convert railway clock to AM/PM clock
    currentHour = (currentHour >= 12 ? currentHour - 12 : currentHour);
    currentHour = (currentHour == 00 ? 12 : currentHour);

    // Prepare the time string from the hours, minutes and seconds
    let currentTimeStr = currentHour + ":" + currentMins + ":" + currentSecs + " " + timeOfDay;

    // Insert the time string inside the DOM
    document.getElementById('clock').innerHTML = currentTimeStr;

    // Extract date, month & year from current date
    let currentDate = currentTime.getDate();
    let currentMonth = currentTime.getMonth() + 1;
    let currentYear = currentTime.getFullYear();
    
    // Pad 0 if month or date is less than 10 (single digit) 
    currentDate = (currentDate < 10 ? "0" : "") + currentDate;
    currentMonth = (currentMonth < 10 ? "0" : "") + currentMonth;

    // Prepare the date string from the date, month & year
    let today = currentDate + "-" + currentMonth + "-" + currentYear;

    // Insert the date string inside the DOM
    document.getElementById('date').innerHTML = today;

}

// function showDate() {
//     let currentTime = new Date();
    // let currentDate = currentTime.getDate();
    // let currentMonth = currentTime.getMonth();
    // let currentYear = currentTime.getFullYear();


    // currentDate = (currentDate < 10 ? "0" : "") + currentDate;
    // currentMonth = (currentMonth < 10 ? "0" : "") + currentMonth;

    // let today = currentDate + "-" + currentMonth + "-" + currentYear;

//     let clock = document.getElementById('clock');
//     clock.innerHTML = today;
// }
// showDate();




