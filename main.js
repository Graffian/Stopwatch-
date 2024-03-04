let secondEl = document.getElementById("seconds");
let hoursEl = document.getElementById("hours");
let minutesEl = document.getElementById("minutes");
let millisecondEl= document.getElementById("milliseconds")
let n = parseInt(secondEl.innerHTML);
let k = parseInt(minutesEl.innerHTML);
let c = parseInt(hoursEl.innerHTML);
let d=parseInt(millisecondEl.innerHTML)
let updateSecondsInterval
let updateMinutesInterval
let updateHoursInterval
function updateSeconds() {
  n = n + 1;
  secondEl.innerHTML = n;
  if (n >= 60) {
    n = 0;
    secondEl.innerHTML = n;
  }
}
function updateMinutes() {
  k = k + 1;
  minutesEl.innerHTML = k;
  if (k >= 60) {
    k = 0;
    minutesEl.innerHTML = k;
  }
}
function updateHours() {
  c = c + 1;
  hoursEl.innerHTML = c;
}
function updateMilliSecond(){
  d=d+1
  millisecondEl.innerHTML=d
  if(d>=100){
    d=0
    millisecondEl.innerHTML=d
  }
}
function startBtn(){
  updateMilliSecondInterval=setInterval(updateMilliSecond,10)
updateSecondsInterval= setInterval(updateSeconds, 1000);
updateMinutesInterval= setInterval(updateMinutes, 60000);
updateHoursInterval= setInterval(updateHours, 3600000);
}
function stopBtn(){
  clearInterval(updateMilliSecondInterval)
  clearInterval(updateSecondsInterval)
  clearInterval(updateMinutesInterval)
  clearInterval(updateHoursInterval)
}
function resetBtn(){
  n = 0;
    secondEl.innerHTML = n;
    d=0
    millisecondEl.innerHTML=d
    k = 0;
    minutesEl.innerHTML = k;
    c=0
    hoursEl.innerHTML = c;
}