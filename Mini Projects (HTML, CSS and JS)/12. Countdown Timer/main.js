let tempTime = new Date();
let tempYear = tempTime.getFullYear();
let tempMonth = tempTime.getMonth();
let tempDate = tempTime.getDate();

// let countDownDate = new Date("April 12, 2034 11:30:00").getTime();
//NOTE: the end date will be set to 10 days from the current date
let countDownDate = new Date(
  tempYear,
  tempMonth,
  tempDate + 10,
  18,
  30,
  0
).getTime();

document.querySelector(".h4").innerText = `Giveaway ends on, ${tempDate + 10}-${
  tempMonth + 1
}-${tempYear} ${tempTime.getHours()}:${tempTime.getMinutes()}`;

function startCounter() {
  let dateNow = new Date().getTime();
  let diff = countDownDate - dateNow;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  document.querySelector(".p-days").innerHTML = days;
  document.querySelector(".p-hours").innerHTML = hours;
  document.querySelector(".p-mins").innerHTML = minutes;
  document.querySelector(".p-secs").innerHTML = seconds;
  if (days < 10) {
    document.querySelector(".p-days").innerHTML = `0${days}`;
  }
  if (hours < 10) {
    document.querySelector(".p-hours").innerHTML = `0${hours}`;
  }
  if (minutes < 10) {
    document.querySelector(".p-mins").innerHTML = `0${minutes}`;
  }
  if (seconds < 10) {
    document.querySelector(".p-secs").innerHTML = `0${seconds}`;
  }

  if (diff <= 0) {
    clearInterval(x);
    document.querySelector(
      ".timer"
    ).innerHTML = `<h3 class="expired">Sorry, This Giveaway Has Expired</h3>`;
  }
}
let x = setInterval(startCounter, 1000);
startCounter();
