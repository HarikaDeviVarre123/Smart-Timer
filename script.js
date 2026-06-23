var cTime = document.querySelector("#cTime");
var cDate = document.querySelector("#cDate");
var cDay = document.querySelector("#cDay");
var greet = document.querySelector("#greet");

function updateClock(){

    let now = new Date();

    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    let status = hr < 12 ? "AM" : "PM";

    if(hr < 12){
        greet.innerHTML = "Good Morning ☀️";
    }
    else if(hr < 18){
        greet.innerHTML = "Good Afternoon 🌤️";
    }
    else{
        greet.innerHTML = "Good Evening 🌙";
    }

    hr = hr % 12 || 12;

    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    cTime.innerHTML = `${hr} : ${min} : ${sec} ${status}`;

    cDate.innerHTML = now.toLocaleDateString();

    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    cDay.innerHTML = days[now.getDay()];
}

updateClock();
setInterval(updateClock, 1000);
