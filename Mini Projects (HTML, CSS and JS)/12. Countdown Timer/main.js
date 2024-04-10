let countDownDate = new Date("April 12, 2034 11:30:00").getTime();
let x = setInterval(() => {
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
  if (diff <= 0) {
    clearInterval(x);
    document.querySelector(".p-days").innerHTML = 0;
    document.querySelector(".p-hours").innerHTML = 0;
    document.querySelector(".p-mins").innerHTML = 0;
    document.querySelector(".p-secs").innerHTML = 0;
  }
}, 1000);
