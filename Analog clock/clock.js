//Clock Functionality
let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime() {
    let date = new Date();

    //Getting hour, mins, secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30 * hh + mm / 2;
    let mRotation = 6 * mm;
    let sRotation = 6 * ss;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);


//Digital Time, e.g: 12:32:02 pm
function digitalTime() {
    let originalDate = new Date();

    //Getting hour, minutes, and seconds
    let digitalHour = originalDate.getHours();
    let digitalMin = originalDate.getMinutes();
    let digitalSec = originalDate.getSeconds();
    let meridian = digitalHour >= 12 ? "pm" : "am";

    document.querySelector(".digital-time").innerHTML =
        `${digitalHour} : ${digitalMin} : ${digitalSec} ${meridian}`;
}

setInterval(digitalTime, 1000);
digitalTime();

//Weekdays Array
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

//Months Array
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

//Date Display, e.g: Thursday 10 April, 2025.
function dateDisplay() {
    let mainDate = new Date();
    let weekDay = weekdays[mainDate.getDay()];
    let getFirstFourChars = weekDay.slice(0, 3);
    let date = mainDate.getDate();
    let getMonth = months[mainDate.getMonth()];
    let getYear = mainDate.getFullYear();

    document.querySelector("#date-display").innerHTML =
        `${getFirstFourChars} ${date} ${getMonth}, ${getYear}`;
}

dateDisplay();

//DOM elements for background color changes during toggle
const headContainer = document.querySelector(".head");
const toggleContainer = document.querySelector(".toggle-container");
const title = document.querySelector(".heading");

//Toggle Theme
document.querySelector("#light-mode").addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
    headContainer.style.backgroundColor = "rgba(55, 55, 55, 0.197)";
    toggleContainer.style.backgroundColor = "#6c6a6a";
    title.style.color = "rgb(7, 8, 72)";
});

document.querySelector("#dark-mode").addEventListener("click", () => {
    document.body.style.backgroundColor = "black";
    headContainer.style.backgroundColor = "rgb(14, 13, 46)";
    title.style.color = "white"
});