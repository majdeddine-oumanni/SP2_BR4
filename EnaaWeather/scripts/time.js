const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

setInterval(updateTime, 1000);

function updateTime(){
  const date = new Date();
  let dayName = weekday[date.getDay()];
  let year = date.getFullYear();
  let monthName = months[date.getMonth()];
  let day = date.getDate();
  let hour = date.getHours();
  let minutes = date.getMinutes();

  //header time
  document.querySelector('.day-time').innerText = `${hour}:${minutes}`;

  //box time
  document.getElementById('day-date').innerText = `${monthName} ${day}, ${dayName}`;
}